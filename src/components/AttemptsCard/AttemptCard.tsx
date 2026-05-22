import { Card } from 'react-bootstrap'

type AttemptCardProps = {
    guid: string,
    title: string,
    createdAt: Date,
    updatedAt: Date,
    grade?: any,
    showLink?: boolean,
}

const AttemptCard = ({ guid, title, createdAt, updatedAt, grade, showLink }: AttemptCardProps) => {
    const start = `${createdAt.toLocaleDateString()} ${createdAt.toLocaleTimeString()}`
    const end = `${updatedAt.toLocaleDateString()} ${updatedAt.toLocaleTimeString()}`
    const mark = grade ? `${grade.shortName} (${grade.value})` : '(не выставлена)'

    return (
        <Card bg="light">
            <Card.Header>
                <Card.Title className="fs-6 mb-0">{title}</Card.Title>
            </Card.Header>

            <Card.Body>
                <Card.Subtitle className="text-muted mb-1">Дата создания: {start}</Card.Subtitle>
                <Card.Subtitle className="text-muted mb-1">Дата изменения: {end}</Card.Subtitle>
                <Card.Subtitle className="text-muted mb-1">Оценка: <strong>{mark}</strong></Card.Subtitle>

                {showLink && (
                    <Card.Subtitle className="text-muted mb-1">
                        <a href={`/attempts/${guid}`}>Просмотр попытки</a>
                    </Card.Subtitle>
                )}
            </Card.Body>
        </Card>
    )
}

export default AttemptCard
