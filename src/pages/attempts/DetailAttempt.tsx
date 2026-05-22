import { useState, useEffect, type SubmitEvent, type ChangeEvent } from 'react'
import { useLoaderData } from 'react-router'
import { Container, Row, Col, Form, ListGroupItem, Alert, Button } from 'react-bootstrap'

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import TableOfContents from '@/components/TableOfContents/TableOfContents'

const DetailAttempt = () => {
    const { attemptId } = useLoaderData()

    const [attempt, setAttempt] = useState<any>()
    const [grades, setGrades] = useState<any>()
    const [selectedGrade, setSelectedGrade] = useState<any>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')
    const [fetchError, setFetchError] = useState<string>('')

    const fetchAttemptData = async () => {
        let response = await fetch(`/api/v1/attempts/${attemptId}`)
        let body = await response.json()

        if (!response.ok && body.error) {
            setError(body.error)
            setLoading(false)
            return
        }

        setAttempt(body)

        response = await fetch('/api/v1/grades')
        body = await response.json()

        if (!response.ok && body.error) {
            setError(body.error)
            setLoading(false)
        }

        setGrades(body)
        setLoading(false)
    }

    useEffect(() => {
        fetchAttemptData()
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

    let problems: any = {}

    attempt.answers.forEach((answer: any) => {
        const problem = answer.task.problem
        const task = answer.task

        if (!(problem.guid in problems)) {
            problems[problem.guid] = {
                guid: problem.guid,
                sorting: problem.sorting,
                wording: problem.wording,
                answers: [],
            }
        }

        problems[problem.guid].answers.push({
            type: task.type,
            wording: task.wording,
            userText: answer.userText,
            variants: answer.selectedVariants,
        })
    })

    problems = Object.entries<any>(problems).map(([, value]) => value)
    problems.sort((left: any, right: any) => left.sorting - right.sorting)

    const studentFullName = `${attempt.user.lastName} ${attempt.user.firstName} ${attempt.user.secondName}`.trim()

    const handleSelectGrade = (event: ChangeEvent) => {
        const $this = event.target as HTMLSelectElement
        const value = $this.value
        setSelectedGrade(value)
    }

    const handleGradeAttempt = async (event: SubmitEvent) => {
        event.preventDefault()

        if (!selectedGrade) {
            return
        }

        const response = await fetch(`/api/v1/attempts/${attemptId}/rate`, {
            method: 'PATCH',
            body: JSON.stringify({ grade: selectedGrade }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })

        const body = await response.json()

        if (!response.ok && body.error) {
            setFetchError(body.error)
            return
        }

        setFetchError('')

        const discId = attempt.test.discipline.guid
        const testId = attempt.test.guid

        window.location.href = `/my-disciplines/${discId}/tests/${testId}`
    }

    const generateAnswer = (answer: any) => {
        switch (answer.type) {
            case 'SingleAnswerTask':
            case 'MultipleAnswersTask':
                return (
                    <>
                        {answer.variants?.map((variant: any) => (
                            <Form.Check
                                id={variant.guid}
                                key={variant.guid}
                                type={answer.type === 'SingleAnswerTask' ? 'radio' : 'checkbox'}
                                value={variant.guid}
                                label={variant.wording}
                                readOnly
                                checked
                            />
                        ))}
                    </>
                )

            case 'TextAnswerTask':
                return (
                    <Form.Control
                        id={answer.guid}
                        as="textarea"
                        placeholder="Введите ответ"
                        rows={4}
                        readOnly
                        value={answer.userText}
                    />
                )
        }
    }

    return (
        <div className="d-flex flex-column min-vh-100">
            <title>Попытка прохождения теста</title>

            <Header />

            <main className="flex-grow-1 py-4">
                <Container className="px-5" fluid>
                    <Row>
                        <Col lg={9} className="order-lg-first order-last">
                            <section className="section">
                                <header className="section-header mb-4">
                                    <h4 className="section-title">Попытка прохождения теста &quot;{attempt.test.name}&quot;</h4>
                                </header>

                                <div className="section-content">
                                    <Form method="post" onSubmit={handleGradeAttempt}>
                                        {problems.map((problem: any) => (
                                            <div className="mb-5" key={problem.guid}>
                                                <h5 className="mb-2">{problem.wording}</h5>

                                                {problem.answers.map((answer: any) => (
                                                    <Form.Group className="mb-4" key={answer.guid}>
                                                        <Form.Label className="fw-semibold">{answer.wording}</Form.Label>
                                                        {generateAnswer(answer)}
                                                    </Form.Group>
                                                ))}
                                            </div>
                                        ))}

                                        {fetchError && (
                                            <Alert variant="danger" className="mb-3">{fetchError}</Alert>
                                        )}

                                        <Alert variant="secondary">
                                            <Form.Group className="mb-4">
                                                <div>Студент: {studentFullName}</div>
                                                <div>Расчитанная линейная оценка: {attempt.linearGrade}</div>
                                                <div>Расчитанная нелинейная оценка: {attempt.nonLinearGrade}</div>
                                            </Form.Group>

                                            <Form.Group className="mb-4">
                                                <Form.Label className="fw-semibold">Выставляемая оценка</Form.Label>

                                                <Form.Select
                                                    name="grade"
                                                    onChange={handleSelectGrade}
                                                >
                                                    <option value="">Выберите оценку</option>

                                                    {grades.map((grade: any) => (
                                                        <option
                                                            key={grade.guid}
                                                            value={grade.guid}
                                                        >{grade.name} ({grade.value})</option>
                                                    ))}
                                                </Form.Select>
                                            </Form.Group>

                                            <Form.Group>
                                                <Button
                                                    type="submit"
                                                    variant="success"
                                                >Оценить</Button>
                                            </Form.Group>
                                        </Alert>
                                    </Form>
                                </div>
                            </section>
                        </Col>

                        <Col lg={3} className="order-lg-last order-first mb-lg-0 mb-3">
                            <div className="table-of-contents">
                                <TableOfContents title={`Задания для теста "Тест №1"`}>
                                    {problems.map((problem: any) => (
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

export default DetailAttempt
