import { Link, useLocation } from 'react-router'
import { Card, ListGroup, Image } from 'react-bootstrap'
import userStubImage from '@assets/user-stub.svg'
import './UserCard.scss'

// TODO: отобразить возраст вместе с датой рождения

const UserCard = () => {
    const { pathname } = useLocation()

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
                <ListGroup.Item
                    as={Link}
                    to="/"
                    active={pathname === '/'}
                    action
                >
                    Профиль
                </ListGroup.Item>

                <ListGroup.Item
                    as={Link}
                    to="/disciplines/userId/"
                    active={pathname === '/disciplines/userId/'}
                    action
                >
                    Мои дисциплины
                </ListGroup.Item>

                <ListGroup.Item
                    as={Link}
                    to="/disciplines/"
                    active={pathname === '/disciplines/'}
                    action
                >
                    Список доступных дисциплин
                </ListGroup.Item>

                <ListGroup.Item
                    as={Link}
                    to="/logout/"
                    active={pathname === '/logout/'}
                    action
                >
                    Выход
                </ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default UserCard;
