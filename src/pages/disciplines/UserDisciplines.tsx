import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '@components/Header/Header'
import Footer from '@/components/Footer/Footer'
import UserCard from '@/components/UserCard/UserCard'
import Discipline from '@/components/Discipline/Discipline'
import ViewDisciplineModal from '@/components/ViewDisciplineModal/ViewDisciplineModal'
import PaginationBlock from '@/components/PaginationBlock/PaginationBlock'
import { type DisciplineType } from '@/types/discipline'

const disciplines: DisciplineType[] = [
    {
        guid: '394bc3f7-08cc-48ad-bbbf-d3c4fd75a433',
        name: 'Математический анализ',
        teachers: 'Иванов И.И.',
        description: 'Раздел математики, который изучает функции, их свойства и изменения. Изначально назывался "анализ бесконечно малых".',
    },
    {
        guid: '81114674-fec8-4de7-838a-613ea6b9b923',
        name: 'Линейная алгебра',
        teachers: 'Иванов И.И.',
        description: 'раздел алгебры, изучающий математические объекты линейной природы. К ним относятся векторные (линейные) пространства и их подпространства, линейные отображения (операторы), линейные, билинейные и квадратичные функции на векторных пространствах.',
    },
    {
        guid: '87db5e1c-f7c0-4ffc-b912-adb7a19aa836',
        name: 'Английский язык',
        teachers: 'Иванов И.И.',
        description: 'индоевропейский язык германской группы. Сложился в Англии в результате взаимодействия нескольких германоязычных племён (англы, саксы, юты) с местными автохтонами, говорившими на кельтских диалектах.',
    },
    {
        guid: '375efd60-6164-4caf-91c1-1ed70d853bc0',
        name: 'Информатика',
        teachers: 'Иванов И.И.',
        description: 'Наука о методах и процессах сбора, хранения, обработки, передачи, анализа и оценки информации с применением компьютерных технологий. Зародилась в середине XX века как самостоятельная наука.',
    },
    {
        guid: 'd67ba4b5-3f77-415d-9ddc-bedc800d55e2',
        name: 'Физика',
        teachers: 'Иванов И.И.',
        description: 'Наука о природе, изучающая простейшие и вместе с тем наиболее общие её закономерности.',
    },
]

const UserDisciplines = ({ title }: { title: string }) => {
    const [selectedDiscipline, setSelectedDiscipline] = useState({} as DisciplineType)
    const [showDisciplineModal, setShowDisciplineModal] = useState(false)

    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const itemsPerPage = 2

    useEffect(() => {
        // TODO: здесь будет запрос к API
        setTotalPages(Math.ceil(disciplines.length / itemsPerPage))
    }, [page, itemsPerPage])

    const handleViewDiscipline = (discipline: DisciplineType) => {
        setSelectedDiscipline(discipline)
        setShowDisciplineModal(true)
    }

    const hideDisciplineModal = () => setShowDisciplineModal(false)

    const handlePageChange = (newPage: number) => {
        setPage(newPage)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleDeleteDiscipline = (discipline: DisciplineType) => {
        if (!confirm(`Вы уверены, что хотите удалить дисциплину "${discipline.name}" из своего списка?`)) {
            return
        }

        // TODO: сделать вызов к API
        console.log('Удаление дисциплины', discipline)
    }

    return (
        <>
            <title>{title}</title>

            <Header />

            <main className="py-4">
                <Container className="px-5" fluid>
                    <Row>
                        <Col className="m-lg-0 mx-auto mb-3" sm={6} lg={3}>
                            <UserCard />
                        </Col>

                        <Col lg={9}>
                            <section className="section">
                                <header className="section-header">
                                    <h4 className="section-title">Мои дисциплины <small>({disciplines.length})</small></h4>

                                    <div className="section-filter"></div>
                                </header>

                                <div className="section-content">
                                    <Row>
                                        {
                                            disciplines.map(discipline => {
                                                return (
                                                    <Col key={discipline.guid} className="mt-3" sm={6} lg={4}>
                                                        <Discipline
                                                            discipline={discipline}
                                                            variant="user"
                                                            onView={handleViewDiscipline}
                                                            onDelete={handleDeleteDiscipline}
                                                        />
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Row>
                                </div>

                                <div className="mt-4">
                                    <PaginationBlock
                                        current={page}
                                        total={totalPages}
                                        siblingCount={1}
                                        onPageChange={handlePageChange}
                                    />
                                </div>
                            </section>
                        </Col>
                    </Row>
                </Container>
            </main>

            <Footer />

            <ViewDisciplineModal
                show={showDisciplineModal}
                onHide={hideDisciplineModal}
                discipline={selectedDiscipline}
            />
        </>
    )
}

export default UserDisciplines
