import { useLoaderData } from 'react-router'
import { Container, Row, Col, ListGroupItem, Alert, Button } from 'react-bootstrap'
import type { MouseEvent } from 'react'

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import TableOfContents from '@/components/TableOfContents/TableOfContents'
import AttemptCard from '@/components/AttemptsCard/AttemptCard'

import tests from '@/mocks/tests'
import '../DetailDiscipline.scss'

const DetailTest = () => {
    const { disciplineId, testId } = useLoaderData()
    const [test] = tests.filter(test => test.disciplineId === disciplineId && test.guid === testId)

    const description = test.fullDescription ?? test.description
    const finalGrade = test.finalGrade ?? '(не рассчитана)'

    const goToTest = (event: MouseEvent) => {
        event.preventDefault();
        const $this = event.target as HTMLAnchorElement;

        if (!confirm('При подтверждении действия вы начнёте попытку. Продолжить?')) {
            return;
        }

        window.location.href = $this.href;
    }

    return (
        <div className="d-flex flex-column min-vh-100">
            <title>{test.name}</title>

            <Header />

            <main className="flex-grow-1 py-4">
                <Container className="px-5" fluid>
                    <Row>
                        <Col lg={9} className="order-lg-first order-last">
                            <section className="section">
                                <header className="section-header mb-3">
                                    <h4 className="section-title">{test.name}</h4>
                                </header>

                                <div className="section-content">
                                    <div>
                                        <h5>Описание теста</h5>
                                        <div className="section-description">{description}</div>

                                        <div className="mt-2">
                                            <div><strong>Длительность:</strong> {test.duration} мин.</div>
                                            <div><strong>Количество попыток:</strong> {test.attemptsCount}</div>
                                            <div><strong>Итоговая оценка за тест:</strong> {finalGrade}</div>
                                        </div>

                                        <div className="mt-3">
                                            <Button
                                                href={`/tests/${testId}`}
                                                variant="success"
                                                onClick={goToTest}
                                            >Пройти тест</Button>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <h5>Ваши попытки</h5>

                                        <div className="mt-2">
                                            {test.attempts && test.attempts.length > 0
                                                ? (
                                                    <Row>
                                                        {test.attempts.map((attempt, index) => (
                                                            <Col key={attempt.guid} lg={4} className="mb-3">
                                                                <AttemptCard
                                                                    title={`Попытка №${index + 1}`}
                                                                    grade={attempt.finalGrade}
                                                                    createdAt={attempt.createdAt}
                                                                    updatedAt={attempt.updatedAt}
                                                                />
                                                            </Col>
                                                        ))}
                                                    </Row>
                                                )
                                                : <Alert variant="primary">Вы ещё не проходили этот тест!</Alert>}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Col>

                        <Col lg={3} className="order-lg-last order-first mb-lg-0 mb-3">
                            <div className="table-of-contents">
                                <TableOfContents title={`Задания для теста "${test.name}"`}>
                                    {test.problems
                                        && test.problems.length > 0
                                        && test.problems.map((problem, index) => (
                                            <ListGroupItem key={index}>{problem}</ListGroupItem>
                                        ))}
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

export default DetailTest
