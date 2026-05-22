import { useState, useEffect, useContext, type SubmitEvent } from 'react'
import { useLoaderData } from 'react-router'
import { Container, Row, Col, Form, Button, ListGroupItem, Alert } from 'react-bootstrap'
import { decode } from 'html-entities'

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import TableOfContents from '@/components/TableOfContents/TableOfContents'
import { AuthContext } from '@/contexts/AuthContext'

const AttemptFull = () => {
    const { testId } = useLoaderData()
    const { user } = useContext(AuthContext)

    const [test, setTest] = useState<any>()
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

    console.log(test)

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
                                name={`answers[${task.guid}]${task.type === 'SingleAnswerTask' ? '' : ''}`}
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
                        name={`answers[${task.guid}]`}
                        placeholder="Введите ответ"
                        rows={4}
                    />
                )
        }
    }

    const handleSubmit = async (event: SubmitEvent) => {
        event.preventDefault()
        const formData = new FormData(event.target)

        formData.append('test', testId)
        formData.append('user', user.guid)

        const response = await fetch('/api/v1/attempts', {
            method: 'POST',
            body: formData,
        })

        const body = await response.json()

        if (!response.ok && body.error) {
            setError(body.error)
            return
        }

        window.location.href = `/my-disciplines/${test.discipline.guid}/tests/${testId}`
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
                                    <h4 className="section-title">Тест &quot;{test.name}&quot;</h4>
                                </header>

                                <div className="section-content">
                                    <Form method="post" onSubmit={handleSubmit}>
                                        {test.problems.map((problem: any) => (
                                            <div key={problem.guid} className="mb-5">
                                                <h5 className="problem-title">{decode(problem.wording)}</h5>

                                                {problem.tasks.map((task: any) => (
                                                    <Form.Group key={task.guid} className="mb-4">
                                                        <Form.Label className="fw-semibold">{decode(task.wording)}</Form.Label>
                                                        {generateTask(task)}
                                                    </Form.Group>
                                                ))}
                                            </div>
                                        ))}

                                        <Form.Group>
                                            <Button
                                                type="submit"
                                                name="finishTest"
                                                variant="success"
                                            >Завершить</Button>
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

export default AttemptFull
