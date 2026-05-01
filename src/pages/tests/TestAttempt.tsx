import { useLoaderData, useLocation } from 'react-router'
import { Container, Row, Col, ListGroupItem, Button, Form } from 'react-bootstrap'

import Header from '@/components/Header/Header'
import TableOfContents from '@/components/TableOfContents/TableOfContents'
import Footer from '@/components/Footer/Footer'

import test from '@/mocks/test'
import type { TaskType } from '@/types/task'

const TestAttempt = () => {
    const { testId, problemId } = useLoaderData()
    const { pathname } = useLocation()

    let problem = test.problems[0]
    let problemIndex = 0

    if (problemId) {
        problem = test.problems.find(prob => prob.guid === problemId)!
        problemIndex = test.problems.findIndex(prob => prob.guid === problemId)
    }

    const prevProblem = test.problems[problemIndex - 1]
    const nextProblem = test.problems[problemIndex + 1]

    const showPrevButton = (problemIndex - 1) >= 0
    const showNextButton = (problemIndex + 1) <= test.problems.length - 1
    const showFinishButton = problemIndex === test.problems.length - 1

    const generateTask = (task: TaskType) => {
        switch (task.type) {
            case 'SingleAnswerTask':
            case 'MultipleAnswersTask':
                return (
                    <>
                        {task.variants?.map(variant => (
                            <Form.Check
                                key={variant.guid}
                                type={task.type === 'SingleAnswerTask' ? 'radio' : 'checkbox'}
                                label={variant.wording}
                            />
                        ))}
                    </>
                )

            case 'TextAnswerTask':
                return (
                    <Form.Control
                        as="textarea"
                        placeholder="Введите ответ"
                        rows={4}
                    />
                )
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
                                    <Form method="post">
                                        {problem.tasks.map(task => (
                                            <Form.Group key={task.guid} className="mb-4">
                                                <Form.Label className="fw-semibold">{task.wording}</Form.Label>
                                                {generateTask(task)}
                                            </Form.Group>
                                        ))}

                                        <Form.Group>
                                            {showPrevButton && (
                                                <Button
                                                    variant="secondary"
                                                    href={`/tests/${testId}/problems/${prevProblem.guid}`}
                                                >Назад</Button>
                                            )}
                                            &nbsp;
                                            {showNextButton && (
                                                <Button
                                                    variant="primary"
                                                    href={`/tests/${testId}/problems/${nextProblem.guid}`}
                                                >Далее</Button>
                                            )}
                                            &nbsp;
                                            {showFinishButton && (
                                                <Button
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
                                <TableOfContents title={`Задания для теста "Тест на дауна"`}>
                                    {test.problems.map(problem => (
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
