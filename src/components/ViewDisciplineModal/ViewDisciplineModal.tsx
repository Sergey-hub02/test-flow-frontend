import { Modal, Form, Button } from 'react-bootstrap'
import { type DisciplineType } from '@/types/discipline'

type ViewDisciplineModalProps = {
    show: boolean,
    onHide: () => void,
    discipline: DisciplineType,
}

const ViewDisciplineModal = (props: ViewDisciplineModalProps) => {
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
                <Form>
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
