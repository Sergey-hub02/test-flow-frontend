import { Container, Row, Col, Image } from 'react-bootstrap'

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import TestsList from '@/components/TestsList/TestsList'

import placehoderImage from '@assets/placeholder.png'
import './DetailDiscipline.scss'

const DetailDiscipline = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <title>Математический анализ</title>

            <Header />

            <main className="flex-grow-1 py-4">
                <Container className="px-5" fluid>
                    <Row>
                        <Col lg={9} className="order-lg-first order-last">
                            <section className="section">
                                <header className="section-header mb-3">
                                    <h4 className="section-title">Дисциплина &quot;Математический анализ&quot;</h4>

                                    <div className="section-image-container">
                                        <Image
                                            src={placehoderImage}
                                            alt="Математический анализ"
                                            fluid
                                        />
                                    </div>
                                </header>

                                <div className="section-content">
                                    <div>
                                        <h5>Описание дисциплины</h5>

                                        <div className="section-description">
                                            <p>Раздел математики, который изучает функции, их свойства и изменения. Изначально назывался "анализ бесконечно малых".</p>
                                            <p>Исторически математический анализ развивался на основе работ Ньютона и Лейбница, которые независимо друг от друга разработали основные принципы дифференциального и интегрального исчисления. В последующие века эта область была существенно расширена благодаря трудам таких математиков, как Коши, Вейерштрасс и Лебег.</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequuntur assumenda earum libero quia temporibus ducimus quisquam doloribus autem aliquam, at velit expedita sapiente laudantium dicta reprehenderit voluptatibus blanditiis quibusdam.</p>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur odio ipsam doloremque reiciendis architecto molestiae maxime ex laudantium, consectetur sunt, fugit minus facilis optio asperiores at. Ducimus rerum perspiciatis, ipsum asperiores exercitationem officiis tempora minus? Unde ducimus, veritatis quisquam ad quidem veniam vel praesentium cupiditate doloremque temporibus exercitationem. Tempora nihil mollitia laboriosam accusantium velit. Atque natus sint vitae placeat unde voluptatibus, amet soluta, deserunt quos aperiam autem suscipit nesciunt laboriosam corrupti! Tempore dolor accusantium, fugit assumenda natus debitis placeat eius possimus veniam quidem doloribus alias, mollitia tempora, illo ut perferendis. Omnis ducimus ullam sapiente quas voluptas rerum facere impedit inventore! Esse laboriosam quos et voluptatibus, pariatur quasi aut? Iure totam dolorum earum! Quia dolores placeat consequuntur facilis itaque tempora, ipsum molestias labore quae fuga pariatur provident voluptate eius, totam accusamus hic perspiciatis voluptatibus. Perferendis, soluta repellat facere, dolorum recusandae molestiae, cum accusantium ipsa assumenda dignissimos repellendus veritatis officiis consequatur!</p>
                                        </div>

                                        <div><strong>Дисциплину ведут:</strong> Иванов И.И.</div>
                                    </div>
                                </div>
                            </section>
                        </Col>

                        <Col lg={3} className="order-lg-last order-first mb-lg-0 mb-3">
                            <div className="tests-list-container">
                                <TestsList />
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
