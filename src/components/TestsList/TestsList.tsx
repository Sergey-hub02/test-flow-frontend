import { Card, ListGroup } from 'react-bootstrap'
import './TestsList.scss'

const TestsList = () => {
    return (
        <Card className="tests-list">
            <Card.Header>
                <Card.Title className="fs-6">Тесты по дисциплине &quot;Математическй анализ&quot;</Card.Title>
            </Card.Header>

            <ListGroup as="ol" variant="flush" numbered>
                <ListGroup.Item href="./tests/testId/" action>Проверка остаточных знаний</ListGroup.Item>
                <ListGroup.Item href="./tests/testId/" action>Тест на рукоблуда</ListGroup.Item>
                <ListGroup.Item href="./tests/testId/" action>Тест на ссанину</ListGroup.Item>
                <ListGroup.Item href="./tests/testId/" action>Тест на очко</ListGroup.Item>
                <ListGroup.Item href="./tests/testId/" action>Тест на пердуна</ListGroup.Item>
                <ListGroup.Item href="./tests/testId/" action>Тест на вагину</ListGroup.Item>
                <ListGroup.Item href="./tests/testId/" action>Тест на суку</ListGroup.Item>
                <ListGroup.Item href="./tests/testId/" action>Тест на ебланище</ListGroup.Item>
                <ListGroup.Item href="./tests/testId/" action>Тест на влагалище</ListGroup.Item>
                <ListGroup.Item href="./tests/testId/" action>Тест на говно</ListGroup.Item>
                <ListGroup.Item href="./tests/testId/" action>Тест на дрочилу</ListGroup.Item>
                <ListGroup.Item href="./tests/testId/" action>Тест на дауна</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default TestsList
