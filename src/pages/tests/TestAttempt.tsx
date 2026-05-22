import { useState, useEffect, type SubmitEvent } from 'react'
import { useLoaderData, useLocation } from 'react-router'
import { Container, Row, Col, ListGroupItem, Button, Form, Alert } from 'react-bootstrap'

import Header from '@/components/Header/Header'
import TableOfContents from '@/components/TableOfContents/TableOfContents'
import Footer from '@/components/Footer/Footer'

const TestAttempt = () => {
    const { testId, problemId } = useLoaderData()
    const { pathname } = useLocation()

    const [test, setTest] = useState<any>()
    const [answer, setAnswer] = useState<any>({})
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)

    const fetchTestData = async () => {
        const response = await fetch(`/api/v1/tests/${testId}`)
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
        const initialAnswer = localStorage.getItem('answer')

        if (initialAnswer) {
            setAnswer(JSON.parse(initialAnswer))
        }

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

    let problem = test.problems[0]
    let problemIndex = 0

    if (problemId) {
        problem = test.problems.find((prob: any) => prob.guid === problemId)!
        problemIndex = test.problems.findIndex((prob: any) => prob.guid === problemId)
    }

    const prevProblem = test.problems[problemIndex - 1]
    const nextProblem = test.problems[problemIndex + 1]

    const showPrevButton = (problemIndex - 1) >= 0
    const showNextButton = (problemIndex + 1) <= test.problems.length - 1
    const showFinishButton = problemIndex === test.problems.length - 1

    const generateTask = (task: any) => {
        switch (task.type) {
            case 'SingleAnswerTask':
            case 'MultipleAnswersTask':
                return (
                    <>
                        {task.variants?.map((variant: any) => (
                            <Form.Check
                                id={variant.guid}
                                key={variant.guid}
                                type={task.type === 'SingleAnswerTask' ? 'radio' : 'checkbox'}
                                name={`task[${task.guid}]${task.type === 'SingleAnswerTask' ? '' : '[]'}`}
                                value={variant.guid}
                                label={variant.wording}
                            />
                        ))}
                    </>
                )

            case 'TextAnswerTask':
                return (
                    <Form.Control
                        id={task.guid}
                        as="textarea"
                        name={`task[${task.guid}]`}
                        placeholder="Введите ответ"
                        rows={4}
                    />
                )
        }
    }

    const handleSubmit = (event: SubmitEvent) => {
        event.preventDefault()
        const submitter = event.nativeEvent.submitter

        if (!submitter) {
            return
        }

        const button = submitter as HTMLButtonElement
        const btnName = button.name
        const nextUrl = button.dataset.next

        switch (btnName) {
            case 'nextProblem':
            case 'prevProblem':
                const formData = new FormData(event.target)

                for (const [field, value] of formData.entries()) {
                    console.log(field, value)
                }

                window.location.href = nextUrl!
                break

            case 'finishTest':
                break

            default:
                return
        }
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
                                    <h4 className="section-title">{problem.wording}</h4>
                                </header>

                                <div className="section-content">
                                    <Form method="post" onSubmit={handleSubmit}>
                                        {problem.tasks.map((task: any) => (
                                            <Form.Group key={task.guid} className="mb-4">
                                                <Form.Label className="fw-semibold">{task.wording}</Form.Label>
                                                {generateTask(task)}
                                            </Form.Group>
                                        ))}

                                        <Form.Group>
                                            {showPrevButton && (
                                                <Button
                                                    type="submit"
                                                    name="prevProblem"
                                                    variant="secondary"
                                                    data-next={`/tests/${testId}/problems/${prevProblem.guid}`}
                                                >Назад</Button>
                                            )}
                                            &nbsp;
                                            {showNextButton && (
                                                <Button
                                                    type="submit"
                                                    name="nextProblem"
                                                    variant="primary"
                                                    data-next={`/tests/${testId}/problems/${nextProblem.guid}`}
                                                >Далее</Button>
                                            )}
                                            &nbsp;
                                            {showFinishButton && (
                                                <Button
                                                    type="submit"
                                                    name="finishTest"
                                                    variant="success"
                                                >Завершить</Button>
                                            )}
                                        </Form.Group>
                                    </Form>
                                </div>
                            </section>
                        </Col>

                        <Col lg={3} className="order-lg-last order-first mb-lg-0 mb-3">
                            <div className="table-of-contents">
                                <TableOfContents title={`Задания для теста "${test.name}"`}>
                                    {test.problems.map((problem: any) => (
                                        <ListGroupItem
                                            key={problem.guid}
                                            href={`/tests/${testId}/problems/${problem.guid}`}
                                            action
                                            active={pathname === `/tests/${testId}/problems/${problem.guid}`}
                                        >
                                            {problem.wording}
                                        </ListGroupItem>
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

export default TestAttempt
