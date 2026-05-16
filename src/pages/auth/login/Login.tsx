import { useState, useEffect, type ChangeEvent, type SubmitEvent, useContext } from 'react'
import { useNavigate } from 'react-router'
import { Button, Container, Form, Image, Alert } from 'react-bootstrap'
import { AuthContext } from '@/contexts/AuthContext'

import testFlowIcon from '@/assets/test-flow-icon-128x128.svg'
import '../auth.scss'

const Login = ({ title }: { title: string }) => {
    const navigate = useNavigate()
    const { user, login } = useContext(AuthContext)

    useEffect(() => {
        if (user?.guid) {
            navigate('/')
        }
    }, [user, navigate])

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [errors, setErrors] = useState<string[]>([])

    const handleEmailChange = (event: ChangeEvent) => {
        const value = (event.target as HTMLInputElement).value
        setEmail(value)
    }

    const handlePasswordChange = (event: ChangeEvent) => {
        const value = (event.target as HTMLInputElement).value
        setPassword(value)
    }

    const handleLogin = async (event: SubmitEvent) => {
        event.preventDefault()

        const response = await fetch('/api/v1/users/auth/', {
            method: 'POST',
            body: JSON.stringify({ login: email, password: password }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })

        const body = await response.json()

        if (!response.ok && body.errors) {
            setErrors(body.errors)
            return
        }

        setErrors([])

        if (login) {
            login(body.accessToken)
        }
    }

    return (
        <>
            <title>{title}</title>

            <Container className="auth-container py-4" fluid>
                <Form method="post" onSubmit={handleLogin}>
                    <Form.Group className="mb-3 text-center">
                        <Image src={testFlowIcon} alt="Test Flow" fluid />
                    </Form.Group>

                    <Form.Group className="mb-3 text-center">
                        <h3 className="fw-semibold">{title}</h3>
                    </Form.Group>

                    {errors.length > 0 && (
                        <Form.Group className="mb-3">
                            <Alert variant="danger">
                                {errors.map((error, index) => <div key={index}>{error}</div>)}
                            </Alert>
                        </Form.Group>
                    )}

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="email" className="fw-semibold">E-mail</Form.Label>

                        <Form.Control
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="password" className="fw-semibold">Пароль</Form.Label>

                        <Form.Control
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-1 text-center">
                        <Button
                            type="submit"
                            className="bg-dark"
                            variant="primary"
                        >Войти &rarr;</Button>
                    </Form.Group>

                    <Form.Group className="text-center">
                        <Button href="/auth/register/" variant="link">Перейти к регистрации</Button>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}

export default Login;
