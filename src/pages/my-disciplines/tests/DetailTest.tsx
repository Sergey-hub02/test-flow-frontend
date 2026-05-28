import { useLoaderData } from 'react-router'
import { Container, Row, Col, ListGroupItem, Alert, Button } from 'react-bootstrap'
import { type MouseEvent, useContext, useEffect, useState } from 'react'

import { AuthContext } from '@/contexts/AuthContext'

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import TableOfContents from '@/components/TableOfContents/TableOfContents'
import AttemptCard from '@/components/AttemptsCard/AttemptCard'

import '../DetailDiscipline.scss'

const DetailTest = () => {
    const { user } = useContext(AuthContext)
    const { disciplineId, testId } = useLoaderData()

    const [test, setTest] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')

    const fetchTestData = async () => {
        const response = await fetch(`/api/v1/disciplines/${disciplineId}/tests/${testId}`)
        const body = await response.json()

        if (!response.ok && body.error) {
            setError(body.error)
            setLoading(false)
            return
        }

        setTest(body)
        setLoading(false)
    }

    useEffect(() => {
        fetchTestData()
    }, [])

    if (loading) {
        return (
            <div className="d-flex flex-column min-vh-100">Загрузка...</div>
        )
    }

    if (!loading && error) {
        return (
            <div className="d-flex flex-column min-vh-100">
                <title>Ошибка</title>
                <Alert variant="danger">{error}</Alert>
            </div>
        )
    }

    const attempts = (user.role === 'student')
        ? test.attempts.filter((attempt: any) => user.guid === attempt.user.guid)
        : test.attempts

    console.log(attempts)
    const description = test.fullDescription ?? test.description

    const grades = test.attempts
        .filter((attempt: any) => attempt.grade)
        .map((attempt: any) => attempt.grade.value)

    const finalGrade = Math.max(...grades) ?? '(не расчитана)'

    const goToTest = async (event: MouseEvent) => {
        event.preventDefault();
        const $this = event.target as HTMLAnchorElement

        if (!confirm('При подтверждении действия вы начнёте попытку. Продолжить?')) {
            return;
        }

        window.location.href = $this.href
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
                                            <div><strong>Количество попыток:</strong> {test.attemptsLimit}</div>

                                            {user.role === 'student' && (
                                                <div><strong>Итоговая оценка за тест:</strong> {finalGrade}</div>
                                            )}
                                        </div>

                                        {user.role === 'student' && (
                                            <div className="mt-3">
                                                <Button
                                                    type="button"
                                                    variant="success"
                                                    href={`/tests/${testId}/`}
                                                    onClick={goToTest}
                                                >Пройти тест</Button>
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-4">
                                        <h5>Ваши попытки</h5>

                                        <div className="mt-2">
                                            {test.attempts && test.attempts.length > 0
                                                ? (
                                                    <Row>
                                                        {attempts.map((attempt: any, index: number) => (
                                                            <Col key={attempt.guid} lg={4} className="mb-3">
                                                                <AttemptCard
                                                                    guid={attempt.guid}
                                                                    title={`Попытка №${index + 1}`}
                                                                    user={`${attempt.user.lastName} ${attempt.user.firstName} ${attempt.user.secondName}`}
                                                                    grade={attempt.grade}
                                                                    createdAt={new Date(attempt.createdAt)}
                                                                    updatedAt={new Date(attempt.updatedAt)}
                                                                    showLink={user.role === 'teacher'}
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
                                        && test.problems.map((problem: any, index: number) => (
                                            <ListGroupItem key={index}>{problem.wording}</ListGroupItem>
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
