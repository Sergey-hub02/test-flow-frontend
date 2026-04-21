import type { PropsWithChildren } from 'react'
import { Card, ListGroup } from 'react-bootstrap'

type TableOfContentsProps = PropsWithChildren & {
    title: string,
}

const TableOfContents = ({ title, children }: TableOfContentsProps) => {
    return (
        <Card className="tests-list">
            <Card.Header>
                <Card.Title className="fs-6">{title}</Card.Title>
            </Card.Header>

            {children
                ? (
                    <ListGroup
                        as="ol"
                        variant="flush"
                        numbered
                    >
                        {children}
                    </ListGroup>
                )
                : <Card.Body>Для этой дисциплины нет тестов</Card.Body>}
        </Card>
    )
}

export default TableOfContents
