import { Card, Image, Button } from 'react-bootstrap'
import { type DisciplineType } from '@/types/discipline'
import placeholderImage from '@/assets/placeholder.png'

type DisciplineProps = {
    discipline: DisciplineType,
    variant: 'regular' | 'user',
    onView: (discipline: DisciplineType) => void,
    onDelete?: (discipline: DisciplineType) => void,
}

const Discipline = ({ discipline, variant, onView, onDelete }: DisciplineProps) => {
    const isUser = (variant === 'user')

    const handleDelete = () => {
        if (!onDelete) {
            return
        }

        onDelete(discipline)
    }

    return (
        <Card>
            <Card.Header>
                <div className="card-image-conatiner rounded mb-3">
                    <Image
                        src={placeholderImage}
                        alt={discipline.name}
                        className="w-100"
                        fluid
                    />
                </div>

                <Card.Title>{discipline.name}</Card.Title>
                <Card.Subtitle className="text-muted">{discipline.teachers}</Card.Subtitle>
            </Card.Header>

            <Card.Body>
                <Card.Text>{discipline.description.substring(0, 116)}...</Card.Text>
            </Card.Body>

            <Card.Footer>
                <div className="d-flex flex-wrap">
                    {isUser && (
                        <>
                            <Button
                                href={`./${discipline.guid}/`}
                                className="bg-dark mt-1"
                            >Просмотр</Button>

                            <Button
                                type="button"
                                variant="danger"
                                className="ms-1 mt-1"
                                onClick={handleDelete}
                            >Удалить</Button>
                        </>
                    )}

                    {!isUser && (
                        <>
                            <Button
                                type="button"
                                variant="success"
                                className="mt-1"
                                onClick={() => onView(discipline)}
                            >Записаться</Button>
                        </>
                    )}
                </div>
            </Card.Footer>
        </Card>
    )
}

export default Discipline
