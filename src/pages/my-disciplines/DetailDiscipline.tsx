import { useLoaderData } from 'react-router'
import { Container, Row, Col, Image, ListGroupItem } from 'react-bootstrap'

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import TableOfContents from '@/components/TableOfContents/TableOfContents'

import disciplines from '@/mocks/disciplines'
import './DetailDiscipline.scss'

const DetailDiscipline = () => {
    const { disciplineId } = useLoaderData()

    const [discipline] = disciplines.filter(disc => disc.guid === disciplineId)
    const description = discipline.fullDescription ?? discipline.description

    return (
        <div className="d-flex flex-column min-vh-100">
            <title>{discipline.name}</title>

            <Header />

            <main className="flex-grow-1 py-4">
                <Container className="px-5" fluid>
                    <Row>
                        <Col lg={9} className="order-lg-first order-last">
                            <section className="section">
                                <header className="section-header mb-3">
                                    <h4 className="section-title">Дисциплина &quot;{discipline.name}&quot;</h4>

                                    <div className="section-image-container">
                                        {discipline.photo && (
                                            <Image
                                                src={discipline.photo}
                                                alt={discipline.name}
                                                fluid
                                            />
                                        )}
                                    </div>
                                </header>

                                <div className="section-content">
                                    <div>
                                        <h5>Описание дисциплины</h5>
                                        <div className="section-description">{description}</div>
                                        <div><strong>Дисциплину ведут:</strong> {discipline.teachers}</div>
                                    </div>
                                </div>
                            </section>
                        </Col>

                        <Col lg={3} className="order-lg-last order-first mb-lg-0 mb-3">
                            <div className="table-of-contents">
                                <TableOfContents title={`Тесты по дисциплине "${discipline.name}"`}>
                                    {discipline.tests
                                        && discipline.tests.length > 0
                                        && discipline.tests.map(test => (
                                            <ListGroupItem
                                                key={test.guid}
                                                href={`./tests/${test.guid}`}
                                                action
                                            >{test.name}</ListGroupItem>
                                        ))}
                                </TableOfContents>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>

            <Footer />
        </div>
    )
}

export default DetailDiscipline
