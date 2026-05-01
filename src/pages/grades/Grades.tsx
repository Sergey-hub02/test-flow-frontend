import { useContext } from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'

import { AuthContext } from '@/contexts/AuthContext'

import Header from '@/components/Header/Header'
import UserCard from '@/components/UserCard/UserCard'
import Footer from '@/components/Footer/Footer'

const Grades = ({ title }: { title: string }) => {
    const { user: userShort } = useContext(AuthContext)

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
                            <section className="section">
                                <header className="section-header mb-3">
                                    <h4 className="section-title">Итоговые оценки по дисциплинам</h4>
                                </header>

                                <div className="section-content mb-3">
                                    <h5>Математический анализ</h5>

                                    <Table bordered responsive hover>
                                        <thead>
                                            <tr>
                                                <th className="text-center align-middle">№</th>
                                                <th className="text-center align-middle">Название теста</th>
                                                <th className="text-center align-middle">Линейная оценка</th>
                                                <th className="text-center align-middle">Нелинейная оценка</th>
                                                <th className="text-center align-middle">Оценка, выставленная преподавателем</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className="text-center align-middle">1</td>
                                                <td className="align-middle">Теста на дауна</td>
                                                <td className="text-center align-middle">4</td>
                                                <td className="text-center align-middle">4</td>
                                                <td className="text-center align-middle">4</td>
                                            </tr>

                                            <tr>
                                                <td className="text-center align-middle">2</td>
                                                <td className="align-middle">Теста на дауна</td>
                                                <td className="text-center align-middle">4</td>
                                                <td className="text-center align-middle">4</td>
                                                <td className="text-center align-middle">4</td>
                                            </tr>

                                            <tr>
                                                <td
                                                    className="text-center align-middle fw-semibold text-uppercase"
                                                    colSpan={2}
                                                >Итоговая оценка</td>

                                                <td
                                                    className="text-center align-middle"
                                                    colSpan={3}
                                                >4</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>

                                <div className="section-content mb-3">
                                    <h5>Физика</h5>

                                    <Table bordered responsive hover>
                                        <thead>
                                            <tr>
                                                <th className="text-center align-middle">№</th>
                                                <th className="text-center align-middle">Название теста</th>
                                                <th className="text-center align-middle">Линейная оценка</th>
                                                <th className="text-center align-middle">Нелинейная оценка</th>
                                                <th className="text-center align-middle">Оценка, выставленная преподавателем</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className="text-center align-middle">1</td>
                                                <td className="align-middle">Теста на дауна</td>
                                                <td className="text-center align-middle">4</td>
                                                <td className="text-center align-middle">4</td>
                                                <td className="text-center align-middle">4</td>
                                            </tr>

                                            <tr>
                                                <td className="text-center align-middle">2</td>
                                                <td className="align-middle">Теста на дауна</td>
                                                <td className="text-center align-middle">4</td>
                                                <td className="text-center align-middle">4</td>
                                                <td className="text-center align-middle">4</td>
                                            </tr>

                                            <tr>
                                                <td
                                                    className="text-center align-middle fw-semibold text-uppercase"
                                                    colSpan={2}
                                                >Итоговая оценка</td>

                                                <td
                                                    className="text-center align-middle"
                                                    colSpan={3}
                                                >4</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>

                                <div className="section-content mb-3">
                                    <h5>Линейная алгебра и аналитическая геометрия</h5>

                                    <Table bordered responsive hover>
                                        <thead>
                                            <tr>
                                                <th className="text-center align-middle">№</th>
                                                <th className="text-center align-middle">Название теста</th>
                                                <th className="text-center align-middle">Линейная оценка</th>
                                                <th className="text-center align-middle">Нелинейная оценка</th>
                                                <th className="text-center align-middle">Оценка, выставленная преподавателем</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className="text-center align-middle">1</td>
                                                <td className="align-middle">Теста на дауна</td>
                                                <td className="text-center align-middle">4</td>
                                                <td className="text-center align-middle">4</td>
                                                <td className="text-center align-middle">4</td>
                                            </tr>

                                            <tr>
                                                <td className="text-center align-middle">2</td>
                                                <td className="align-middle">Теста на дауна</td>
                                                <td className="text-center align-middle">4</td>
                                                <td className="text-center align-middle">4</td>
                                                <td className="text-center align-middle">4</td>
                                            </tr>

                                            <tr>
                                                <td
                                                    className="text-center align-middle fw-semibold text-uppercase"
                                                    colSpan={2}
                                                >Итоговая оценка</td>

                                                <td
                                                    className="text-center align-middle"
                                                    colSpan={3}
                                                >4</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>

                                <div className="section-content mb-3">
                                    <Button variant="success">Скачать статистику</Button>
                                </div>
                            </section>
                        </Col>
                    </Row>
                </Container>
            </main>

            <Footer />
        </div>
    )
}

export default Grades
