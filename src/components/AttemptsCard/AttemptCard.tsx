import { Card } from 'react-bootstrap'

type AttemptCardProps = {
    title: string,
    createdAt: Date,
    updatedAt: Date,
    grade?: number,
}

const AttemptCard = ({ title, createdAt, updatedAt, grade }: AttemptCardProps) => {
    const start = `${createdAt.toLocaleDateString()} ${createdAt.toLocaleTimeString()}`
    const end = `${updatedAt.toLocaleDateString()} ${updatedAt.toLocaleTimeString()}`
    const mark = grade ?? '(не выставлена)'

    return (
        <Card bg="light">
            <Card.Header>
                <Card.Title className="fs-6 mb-0">{title}</Card.Title>
            </Card.Header>

            <Card.Body>
                <Card.Subtitle className="text-muted mb-1">Время начала: {start}</Card.Subtitle>
                <Card.Subtitle className="text-muted mb-1">Время окончания: {end}</Card.Subtitle>
                <Card.Subtitle className="text-muted mb-1">Оценка: <strong>{mark}</strong></Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

export default AttemptCard
