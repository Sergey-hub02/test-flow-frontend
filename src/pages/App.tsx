import { Container, Row, Col, Form, Button, Image, Card } from 'react-bootstrap'
import Header from '@components/Header/Header'
import UserCard from '@components/UserCard/UserCard'
import userStubImage from '@assets/user-stub.svg'
import './App.scss'

// TODO: добавить получение данных пользователя через запрос к API

const App = ({ title }: { title: string }) => {
    return (
        <>
            <title>{title}</title>

            <Header />

            <main className="py-4">
                <Container className="px-5" fluid>
                    <Row>
                        <Col className="m-lg-0 mx-auto mb-3" sm={6} lg={3}>
                            <UserCard />
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
                                            />
                                        </Col>

                                        <Col className="mb-3" md={4}>
                                            <Form.Label htmlFor="first-name" className="mb-1">Имя</Form.Label>

                                            <Form.Control
                                                id="first-name"
                                                name="firstName"
                                                type="text"
                                            />
                                        </Col>

                                        <Col className="mb-3" md={4}>
                                            <Form.Label htmlFor="second-name" className="mb-1">Отчество</Form.Label>

                                            <Form.Control
                                                id="second-name"
                                                name="secondName"
                                                type="text"
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
                                                type="datetime-local"
                                                disabled
                                            />
                                        </Col>

                                        <Col className="mb-3" md={6}>
                                            <Form.Label htmlFor="updated-at" className="mb-1">Дата последних изменений</Form.Label>

                                            <Form.Control
                                                id="updated-at"
                                                name="updatedAt"
                                                type="datetime-local"
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

                            <Form className="border rounded py-3 px-4">
                                <Form.Group className="mb-4">
                                    <h4>Загрузка фотографии</h4>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Card className="w-100 overflow-hidden photo-preview-container">
                                        <Image
                                            src={userStubImage}
                                            alt="Предварительный просмотр"
                                            className="photo-preview"
                                        />
                                    </Card>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="photo" className="mb-1">Фотография</Form.Label>

                                    <Form.Control
                                        id="photo"
                                        name="photo"
                                        type="file"
                                        accept=".jpg,.jpeg,.png"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Button type="submit" variant="success">
                                        Загрузить
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}

export default App
