import { Container } from 'react-bootstrap'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const About = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <title>О проекте</title>

            <Header />

            <main className="flex-grow-1 py-4">
                <Container className="px-5" fluid>
                    <section className="section">
                        <header className="section-header mb-3">
                            <h4 className="section-title">О проекте</h4>
                        </header>

                        <div className="section-content">
                            <p>Проект &laquo;Test Flow&raquo; является дипломным проектом студента магистратуры РТУ МИРЭА Пака Сергея Андреевича. Выполнен в рамках магистерской диссертации на тему &laquo;Система контроля успеваемости учащихся на основе нелинейного оценивания&raquo;. Руководитель ВКР &mdash; Краснов Андрей Евгеньевич, профессор кафедры &laquo;Математического обеспечения и стандартизации информационных систем&raquo;, д.ф.-м.н., профессор.</p>
                            <p>Особенность проекта &mdash; использование нового метода оценивания, основанного на использовании нелинейной модели, для повышения достоверности. Метод заключается в подсчёте количеств оценок и расчёте с помощью формули Коши степени сходства получившегося вектора с эталонными.</p>
                        </div>
                    </section>
                </Container>
            </main>

            <Footer />
        </div>
    )
}

export default About
