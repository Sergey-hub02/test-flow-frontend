import { Card, ListGroup, Image } from 'react-bootstrap'
import userStubImage from '@assets/user-stub.svg'
import './UserCard.scss'

// TODO: отобразить возраст вместе с датой рождения

const UserCard = () => {
    return (
        <Card className="bg-light">
            <Card.Header className="px-5 py-4">
                <div className="user-photo-container text-center">
                    <Image
                        src={userStubImage}
                        alt="Фотография пользователя"
                        className="w-100 rounded-circle user-photo"
                    />
                </div>

                <Card.Title className="mt-3 text-center">Пак Сергей Андреевич</Card.Title>
            </Card.Header>

            <ListGroup variant="flush">
                <ListGroup.Item href="/" action active>Профиль</ListGroup.Item>
                <ListGroup.Item href="/my-disciplines/" action>Мои дисциплины</ListGroup.Item>
                <ListGroup.Item href="/disciplines/" action>Список доступных дисциплин</ListGroup.Item>
                <ListGroup.Item href="/logout/" action>Выход</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default UserCard;
