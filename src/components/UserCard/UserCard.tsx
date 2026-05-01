import { Link, useLocation } from 'react-router'
import { Card, ListGroup, Image } from 'react-bootstrap'
import userStubImage from '@/assets/user-stub.svg'
import type { UserType } from '@/types/user'
import './UserCard.scss'

// TODO: отобразить возраст вместе с датой рождения
// TODO: забирать данные о пользователе из JWT-токена в куках
// TODO: создать функцию для сбора данных о пользователе из переданного JWT-токена

type UserCardProps = {
    user: UserType,
}

const UserCard = ({ user }: UserCardProps) => {
    const { pathname } = useLocation()
    const image = (user.photo ?? userStubImage)

    return (
        <Card className="bg-light">
            <Card.Header className="px-5 py-4">
                <div className="user-photo-container text-center">
                    <Image
                        src={image}
                        alt="Фотография пользователя"
                        className="w-100 rounded-circle user-photo"
                    />
                </div>

                <Card.Title className="mt-3 text-center">{`${user.lastName} ${user.firstName} ${user.secondName}`.trim()}</Card.Title>
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
                    to="/my-disciplines/"
                    active={pathname === '/my-disciplines/'}
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
                    to="/grades/"
                    active={pathname === '/grades/'}
                    action
                >
                    Итоговые оценки
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
