import { useContext, useEffect, useState, type ChangeEvent, type SubmitEvent } from 'react'
import { useNavigate } from 'react-router'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'

import Header from '@/components/Header/Header'
import UserCard from '@/components/UserCard/UserCard'
import ImageUploader from '@/components/ImageUploader/ImageUploader'
import Footer from '@/components/Footer/Footer'

import { AuthContext } from '@/contexts/AuthContext'
import './App.scss'

const App = ({ title }: { title: string }) => {
    const { user: userShort } = useContext(AuthContext)
    const navigate = useNavigate()
    const [user, setUser] = useState<any>({})

    const [lastName, setLastName] = useState<string>('')
    const [firstName, setFirstName] = useState<string>('')
    const [secondName, setSecondName] = useState<string>('')
    const [birthday, setBirthday] = useState<string>('')
    const [error, setError] = useState<string>('')

    const fetchUserData = async (guid: string) => {
        const response = await fetch(`/api/v1/users/${guid}`)
        const body = await response.json()

        if (!response.ok && body.error) {
            throw new Error(body.error)
        }

        return body
    }

    useEffect(() => {
        if (!userShort?.guid) {
            navigate('/auth/login/')
            return
        }

        const guid = userShort.guid

        fetchUserData(guid).then(userData => {
            setUser(userData)
            setLastName(userData.lastName)
            setFirstName(userData.firstName)
            setSecondName(userData.secondName)
            setBirthday(userData.birthday)
        })
    }, [])

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

    const handleBirthdayChange = (event: ChangeEvent) => {
        const value = (event.target as HTMLInputElement).value
        setBirthday(value)
    }

    const handleUpdate = async (event: SubmitEvent) => {
        event.preventDefault()
        const guid = user.guid

        if (!guid) {
            return
        }

        const response = await fetch(`/api/v1/users/${guid}`, {
            method: 'PATCH',
            body: JSON.stringify({
                lastName: lastName,
                firstName: firstName,
                secondName: secondName,
                birthday: birthday,
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })

        const body = await response.json()

        if (!response.ok && body.error) {
            setError(body.error)
            return
        }

        setError('')
        window.location.reload()
    }

    return (
        <div className="d-flex flex-column min-vh-100">
            <title>{title}</title>

            <Header />

            <main className="flex-grow-1 py-4">
                <Container className="px-5" fluid>
                    <Row>
                        <Col className="m-lg-0 mx-auto mb-3" sm={6} lg={3}>
                            <UserCard user={userShort} />
                        </Col>

                        <Col lg={9}>
                            <Form className="border rounded py-3 px-4 mb-3" method="post" onSubmit={handleUpdate}>
                                <Form.Group className="mb-4">
                                    <h4>Общая информация</h4>
                                </Form.Group>

                                {error && (
                                    <Form.Group>
                                        <Alert variant="danger">{error}</Alert>
                                    </Form.Group>
                                )}

                                <Form.Group>
                                    <Row>
                                        <Col className="mb-3" md={4}>
                                            <Form.Label htmlFor="last-name" className="mb-1">Фамилия</Form.Label>

                                            <Form.Control
                                                id="last-name"
                                                name="lastName"
                                                type="text"
                                                value={lastName}
                                                onChange={handleLastNameChange}
                                            />
                                        </Col>

                                        <Col className="mb-3" md={4}>
                                            <Form.Label htmlFor="first-name" className="mb-1">Имя</Form.Label>

                                            <Form.Control
                                                id="first-name"
                                                name="firstName"
                                                type="text"
                                                value={firstName}
                                                onChange={handleFirstNameChange}
                                            />
                                        </Col>

                                        <Col className="mb-3" md={4}>
                                            <Form.Label htmlFor="second-name" className="mb-1">Отчество</Form.Label>

                                            <Form.Control
                                                id="second-name"
                                                name="secondName"
                                                type="text"
                                                value={secondName}
                                                onChange={handleSecondNameChange}
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>

                                <Form.Group>
                                    <Row>
                                        <Col className="mb-3" md={6}>
                                            <Form.Label htmlFor="login" className="mb-1">Логин</Form.Label>

                                            <Form.Control
                                                id="login"
                                                name="login"
                                                type="email"
                                                value={user.login}
                                                readOnly
                                                disabled
                                            />
                                        </Col>

                                        <Col className="mb-3" md={6}>
                                            <Form.Label htmlFor="birthday" className="mb-1">Дата рождения</Form.Label>

                                            <Form.Control
                                                id="birthday"
                                                name="birthday"
                                                type="date"
                                                value={birthday}
                                                onChange={handleBirthdayChange}
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>

                                <Form.Group>
                                    <Row>
                                        <Col className="mb-3" md={6}>
                                            <Form.Label htmlFor="created-at" className="mb-1">Дата регистрации</Form.Label>

                                            <Form.Control
                                                id="created-at"
                                                name="createdAt"
                                                type="text"
                                                value={user.createdAt}
                                                readOnly
                                                disabled
                                            />
                                        </Col>

                                        <Col className="mb-3" md={6}>
                                            <Form.Label htmlFor="updated-at" className="mb-1">Дата последних изменений</Form.Label>

                                            <Form.Control
                                                id="updated-at"
                                                name="updatedAt"
                                                type="text"
                                                value={user.updatedAt}
                                                readOnly
                                                disabled
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>

                                <Form.Group>
                                    <Button type="submit" variant="success">
                                        Сохранить
                                    </Button>
                                </Form.Group>
                            </Form>

                            <ImageUploader />
                        </Col>
                    </Row>
                </Container>
            </main>

            <Footer />
        </div>
    )
}

export default App
