import { useState, useEffect, useContext, type ChangeEvent, type SubmitEvent } from 'react'
import { useNavigate } from 'react-router'
import { Container, Form, Image, Button, Row, Col, Alert } from 'react-bootstrap'
import { AuthContext } from '@/contexts/AuthContext'
import testFlowIcon from '@/assets/test-flow-icon-128x128.svg'
import '../auth.scss'

const Register = ({ title }: { title: string }) => {
    const navigate = useNavigate()
    const { user, login } = useContext(AuthContext)

    useEffect(() => {
        if (user?.guid) {
            navigate('/')
        }
    }, [user, navigate])

    const [lastName, setLastName] = useState<string>('')
    const [firstName, setFirstName] = useState<string>('')
    const [secondName, setSecondName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [birthday, setBirthday] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [errors, setErrors] = useState<string[]>([])

    const handleLastNameChange = (event: ChangeEvent) => {
        const value = (event.target as HTMLInputElement).value
        setLastName(value)
    }

    const handleFirstNameChange = (event: ChangeEvent) => {
        const value = (event.target as HTMLInputElement).value
        setFirstName(value)
    }

    const handleSecondNameChange = (event: ChangeEvent) => {
        const value = (event.target as HTMLInputElement).value
        setSecondName(value)
    }

    const handleEmailChange = (event: ChangeEvent) => {
        const value = (event.target as HTMLInputElement).value
        setEmail(value)
    }

    const handleBirthdayChange = (event: ChangeEvent) => {
        const value = (event.target as HTMLInputElement).value
        setBirthday(value)
    }

    const handlePasswordChange = (event: ChangeEvent) => {
        const value = (event.target as HTMLInputElement).value
        setPassword(value)
    }

    const handleConfirmPasswordChange = (event: ChangeEvent) => {
        const value = (event.target as HTMLInputElement).value
        setConfirmPassword(value)
    }

    const handleRegister = async (event: SubmitEvent) => {
        event.preventDefault()

        const response = await fetch('/api/v1/users/', {
            method: 'POST',
            body: JSON.stringify({
                lastName: lastName,
                firstName: firstName,
                secondName: secondName,
                login: email,
                birthday: birthday,
                password: password,
                confirmPassword: confirmPassword,
            }),
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
                <Form method="post" onSubmit={handleRegister}>
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
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label htmlFor="last-name" className="fw-semibold">Фамилия</Form.Label>

                                    <Form.Control
                                        id="last-name"
                                        name="lastName"
                                        type="text"
                                        value={lastName}
                                        onChange={handleLastNameChange}
                                    />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group>
                                    <Form.Label htmlFor="first-name" className="fw-semibold">Имя</Form.Label>

                                    <Form.Control
                                        id="first-name"
                                        name="firstName"
                                        type="text"
                                        value={firstName}
                                        onChange={handleFirstNameChange}
                                    />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group>
                                    <Form.Label htmlFor="second-name" className="fw-semibold">Отчество</Form.Label>

                                    <Form.Control
                                        id="second-name"
                                        name="secondName"
                                        type="text"
                                        value={secondName}
                                        onChange={handleSecondNameChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label htmlFor="email" className="fw-semibold">E-mail</Form.Label>

                                    <Form.Control
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group>
                                    <Form.Label htmlFor="birthday" className="fw-semibold">Дата рождения</Form.Label>

                                    <Form.Control
                                        id="birthday"
                                        name="birthday"
                                        type="date"
                                        value={birthday}
                                        onChange={handleBirthdayChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label htmlFor="password" className="fw-semibold">Пароль</Form.Label>

                                    <Form.Control
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        aria-describedby="password-description"
                                    />

                                    <Form.Text id="password-description" muted>Длина пароля должна быть от 8 до 20 символов</Form.Text>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group>
                                    <Form.Label htmlFor="confirmation-password" className="fw-semibold">Повторите пароль</Form.Label>

                                    <Form.Control
                                        id="confirmation-password"
                                        name="confirmationPassword"
                                        type="password"
                                        value={confirmPassword}
                                        onChange={handleConfirmPasswordChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-1 text-center">
                        <Button
                            type="submit"
                            className="bg-dark"
                            variant="primary"
                        >Зарегистрироваться &rarr;</Button>
                    </Form.Group>

                    <Form.Group className="text-center">
                        <Button href="/auth/login/" variant="link">Перейти к авторизации</Button>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}

export default Register;
