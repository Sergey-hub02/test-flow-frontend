import { Card, Image, Button } from 'react-bootstrap'
import { type DisciplineType } from '@/types/discipline'
import placeholderImage from '@assets/placeholder.png'

const Discipline = ({ discipline, onView }: { discipline: DisciplineType, onView: (discipline: DisciplineType) => void }) => {
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
                <Button
                    type="button"
                    variant="success"
                    className="bg-dark"
                    onClick={() => onView(discipline)}
                >Записаться</Button>
            </Card.Footer>
        </Card>
    )
}

export default Discipline
