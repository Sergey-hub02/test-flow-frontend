import { useContext, useState, type SubmitEvent } from 'react'
import { Modal, Form, Button, Alert } from 'react-bootstrap'

import { type DisciplineType } from '@/types/discipline'
import { AuthContext } from '@/contexts/AuthContext'

type ViewDisciplineModalProps = {
    show: boolean,
    onHide: () => void,
    discipline: DisciplineType,
}

const ViewDisciplineModal = (props: ViewDisciplineModalProps) => {
    const { user } = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleAddDiscipline = async (event: SubmitEvent) => {
        event.preventDefault()

        const response = await fetch('/api/v1/users/disciplines', {
            method: 'POST',
            body: JSON.stringify({
                userGuid: user.guid,
                disciplineGuid: props.discipline.guid,
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })

        const body = await response.json()

        if (!response.ok && body.error) {
            setError(body.error)
            return
        }

        setError('')
        window.location.reload()
    }

    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>{props.discipline.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form method="post" onSubmit={handleAddDiscipline}>
                    {error && (
                        <Form.Group className="mb-3">
                            <Alert variant="danger">{error}</Alert>
                        </Form.Group>
                    )}

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="name" className="mb-1">Название</Form.Label>

                        <Form.Control
                            id="name"
                            name="name"
                            type="text"
                            value={props.discipline.name}
                            disabled
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="teachers" className="mb-1">Преподаватели</Form.Label>

                        <Form.Control
                            id="teachers"
                            name="teachers"
                            type="text"
                            value={props.discipline.teachers}
                            disabled
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="description" className="mb-1">Описание</Form.Label>

                        <Form.Control
                            id="name"
                            name="name"
                            type="text"
                            as="textarea"
                            rows={4}
                            value={props.discipline.description}
                            disabled
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="amount-of-tests" className="mb-1">Количество тестов</Form.Label>

                        <Form.Control
                            id="amount-of-tests"
                            name="amountOfTests"
                            type="number"
                            disabled
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Button
                            type="submit"
                            variant="success"
                        >Записаться</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default ViewDisciplineModal
