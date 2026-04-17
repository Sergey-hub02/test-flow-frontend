import { useContext } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import Header from '@components/Header/Header'
import UserCard from '@components/UserCard/UserCard'
import ImageUploader from '@components/ImageUploader/ImageUploader'
import Footer from '@components/Footer/Footer'

import { AuthContext } from '@contexts/AuthContext'

import './App.scss'

// TODO: добавить получение данных пользователя через запрос к API
const user = {
    guid: '12345678',
    lastName: 'Иванов',
    firstName: 'Иван',
    secondName: 'Иванович',
    login: 'ivanov@mail.ru',
    birthday: new Date('1998-04-20'),
    role: 'student',
    createdAt: new Date(),
    updatedAt: new Date(),
}

// TODO: добавить компонент, показывающий загрузку страницы

const App = ({ title }: { title: string }) => {
    const { user: userShort } = useContext(AuthContext)

    return (
        <>
            <title>{title}</title>

            <Header />

            <main className="py-4">
                <Container className="px-5" fluid>
                    <Row>
                        <Col className="m-lg-0 mx-auto mb-3" sm={6} lg={3}>
                            <UserCard user={userShort} />
                        </Col>

                        <Col lg={9}>
                            <Form className="border rounded py-3 px-4 mb-3">
                                <Form.Group className="mb-4">
                                    <h4>Общая информация</h4>
                                </Form.Group>

                                <Form.Group>
                                    <Row>
                                        <Col className="mb-3" md={4}>
                                            <Form.Label htmlFor="last-name" className="mb-1">Фамилия</Form.Label>

                                            <Form.Control
                                                id="last-name"
                                                name="lastName"
                                                type="text"
                                                value={user.lastName}
                                            />
                                        </Col>

                                        <Col className="mb-3" md={4}>
                                            <Form.Label htmlFor="first-name" className="mb-1">Имя</Form.Label>

                                            <Form.Control
                                                id="first-name"
                                                name="firstName"
                                                type="text"
                                                value={user.firstName}
                                            />
                                        </Col>

                                        <Col className="mb-3" md={4}>
                                            <Form.Label htmlFor="second-name" className="mb-1">Отчество</Form.Label>

                                            <Form.Control
                                                id="second-name"
                                                name="secondName"
                                                type="text"
                                                value={user.secondName}
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>

                                <Form.Group>
                                    <Row>
                                        <Col className="mb-3" md={4}>
                                            <Form.Label htmlFor="login" className="mb-1">Логин</Form.Label>

                                            <Form.Control
                                                id="login"
                                                name="login"
                                                type="email"
                                                value={user.login}
                                            />
                                        </Col>

                                        <Col className="mb-3" md={4}>
                                            <Form.Label htmlFor="password" className="mb-1">Пароль</Form.Label>

                                            <Form.Control
                                                id="password"
                                                name="password"
                                                type="password"
                                                aria-describedby="password-description"
                                            />

                                            <Form.Text id="password-description" muted>Длина пароля должна быть от 8 до 20 символов</Form.Text>
                                        </Col>

                                        <Col className="mb-3" md={4}>
                                            <Form.Label htmlFor="confirmation-password" className="mb-1">Повторите пароль</Form.Label>

                                            <Form.Control
                                                id="confirmation-password"
                                                name="confirmationPassword"
                                                type="password"
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
                                                value={user.createdAt.toLocaleString()}
                                                disabled
                                            />
                                        </Col>

                                        <Col className="mb-3" md={6}>
                                            <Form.Label htmlFor="updated-at" className="mb-1">Дата последних изменений</Form.Label>

                                            <Form.Control
                                                id="updated-at"
                                                name="updatedAt"
                                                type="text"
                                                value={user.updatedAt.toLocaleString()}
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
        </>
    )
}

export default App
