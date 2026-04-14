import { Container, Form, Image, Button, Row, Col } from 'react-bootstrap';
import testFlowIcon from '@assets/test-flow-icon-128x128.svg';
import '../auth.scss';

const Register = ({ title }: { title: string }) => {
    return (
        <>
            <title>{title}</title>

            <Container className="auth-container py-4" fluid>
                <Form>
                    <Form.Group className="mb-3 text-center">
                        <Image src={testFlowIcon} alt="Test Flow" fluid />
                    </Form.Group>

                    <Form.Group className="mb-3 text-center">
                        <h3 className="fw-semibold">{title}</h3>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label htmlFor="last-name" className="fw-semibold">Фамилия</Form.Label>

                                    <Form.Control
                                        id="last-name"
                                        name="lastName"
                                        type="text"
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
