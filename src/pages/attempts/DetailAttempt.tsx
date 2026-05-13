import { Container, Row, Col, Form, ListGroupItem, Alert, Button } from 'react-bootstrap'

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import TableOfContents from '@/components/TableOfContents/TableOfContents'

const DetailAttempt = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <title>Название попытки</title>

            <Header />

            <main className="flex-grow-1 py-4">
                <Container className="px-5" fluid>
                    <Row>
                        <Col lg={9} className="order-lg-first order-last">
                            <section className="section">
                                <header className="section-header mb-4">
                                    <h4 className="section-title">Название попытки</h4>
                                </header>

                                <div className="section-content">
                                    <Form method="post">
                                        <div className="mb-5">
                                            <h5 className="mb-2">Задание 1</h5>

                                            <Form.Group className="mb-4">
                                                <Form.Label className="fw-semibold">Задача 1</Form.Label>

                                                <Form.Check
                                                    type="radio"
                                                    label="Вариант 1"
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    label="Вариант 2"
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    label="Вариант 3"
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-4">
                                                <Form.Label className="fw-semibold">Задача 2</Form.Label>

                                                <Form.Check
                                                    type="checkbox"
                                                    label="Вариант 1"
                                                />
                                                <Form.Check
                                                    type="checkbox"
                                                    label="Вариант 2"
                                                />
                                                <Form.Check
                                                    type="checkbox"
                                                    label="Вариант 3"
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-4">
                                                <Form.Label className="fw-semibold">Задача 3</Form.Label>

                                                <Form.Control
                                                    as="textarea"
                                                    placeholder="Введите ответ"
                                                    rows={4}
                                                />
                                            </Form.Group>
                                        </div>

                                        <div className="mb-5">
                                            <h5 className="mb-2">Задание 2</h5>

                                            <Form.Group className="mb-4">
                                                <Form.Label className="fw-semibold">Задача 1</Form.Label>

                                                <Form.Check
                                                    type="radio"
                                                    label="Вариант 1"
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    label="Вариант 2"
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    label="Вариант 3"
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-4">
                                                <Form.Label className="fw-semibold">Задача 2</Form.Label>

                                                <Form.Check
                                                    type="checkbox"
                                                    label="Вариант 1"
                                                />
                                                <Form.Check
                                                    type="checkbox"
                                                    label="Вариант 2"
                                                />
                                                <Form.Check
                                                    type="checkbox"
                                                    label="Вариант 3"
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-4">
                                                <Form.Label className="fw-semibold">Задача 3</Form.Label>

                                                <Form.Control
                                                    as="textarea"
                                                    placeholder="Введите ответ"
                                                    rows={4}
                                                />
                                            </Form.Group>
                                        </div>

                                        <div className="mb-5">
                                            <h5 className="mb-2">Задание 3</h5>

                                            <Form.Group className="mb-4">
                                                <Form.Label className="fw-semibold">Задача 1</Form.Label>

                                                <Form.Check
                                                    type="radio"
                                                    label="Вариант 1"
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    label="Вариант 2"
                                                />
                                                <Form.Check
                                                    type="radio"
                                                    label="Вариант 3"
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-4">
                                                <Form.Label className="fw-semibold">Задача 2</Form.Label>

                                                <Form.Check
                                                    type="checkbox"
                                                    label="Вариант 1"
                                                />
                                                <Form.Check
                                                    type="checkbox"
                                                    label="Вариант 2"
                                                />
                                                <Form.Check
                                                    type="checkbox"
                                                    label="Вариант 3"
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-4">
                                                <Form.Label className="fw-semibold">Задача 3</Form.Label>

                                                <Form.Control
                                                    as="textarea"
                                                    placeholder="Введите ответ"
                                                    rows={4}
                                                />
                                            </Form.Group>
                                        </div>

                                        <Alert variant="secondary">
                                            <Form.Group className="mb-4">
                                                <div>Студент: Иванов Иван Иванович</div>
                                                <div>Линейная оценка: 4.3</div>
                                                <div>Нелинейная оценка: 4</div>
                                                <div>Степень выраженности: 0,54</div>
                                            </Form.Group>

                                            <Form.Group className="mb-4">
                                                <Form.Label className="fw-semibold">Выставляемая оценка</Form.Label>

                                                <Form.Select>
                                                    <option value="">Выберите оценку</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </Form.Select>
                                            </Form.Group>

                                            <Form.Group>
                                                <Button variant="success">Оценить</Button>
                                            </Form.Group>
                                        </Alert>
                                    </Form>
                                </div>
                            </section>
                        </Col>

                        <Col lg={3} className="order-lg-last order-first mb-lg-0 mb-3">
                            <div className="table-of-contents">
                                <TableOfContents title={`Задания для теста "Тест №1"`}>
                                    <ListGroupItem
                                        key=""
                                        href="#"
                                        action
                                        active
                                    >
                                        Задание 1
                                    </ListGroupItem>

                                    <ListGroupItem
                                        key=""
                                        href="#"
                                        action
                                    >
                                        Задание 2
                                    </ListGroupItem>

                                    <ListGroupItem
                                        key=""
                                        href="#"
                                        action
                                    >
                                        Задание 3
                                    </ListGroupItem>

                                    <ListGroupItem
                                        key=""
                                        href="#"
                                        action
                                    >
                                        Задание 4
                                    </ListGroupItem>
                                </TableOfContents>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>

            <Footer />
        </div>
    )
}

export default DetailAttempt
