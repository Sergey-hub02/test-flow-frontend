import { useEffect, useState, useContext } from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import UserCard from '@/components/UserCard/UserCard'
import Discipline from '@/components/Discipline/Discipline'
import ViewDisciplineModal from '@/components/ViewDisciplineModal/ViewDisciplineModal'
import PaginationBlock from '@/components/PaginationBlock/PaginationBlock'

import { type DisciplineType } from '@/types/discipline'
import { AuthContext } from '@/contexts/AuthContext'

const Disciplines = ({ title }: { title: string }) => {
    const { user, loading } = useContext(AuthContext)
    const [selectedDiscipline, setSelectedDiscipline] = useState({} as DisciplineType)
    const [showDisciplineModal, setShowDisciplineModal] = useState(false)
    const [disciplines, setDisciplines] = useState<any[]>([])
    const [error, setError] = useState('')

    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const itemsPerPage = 2

    const fetchDisciplines = async () => {
        const response = await fetch(`/api/v1/disciplines/available/${user.guid}`)
        const body = await response.json()

        if (!response.ok && body?.error) {
            setError(body.error)
            return
        }

        setDisciplines(body)
    }

    useEffect(() => {
        if (loading) {
            return
        }

        fetchDisciplines()
    }, [loading])

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

    return (
        <div className="d-flex flex-column min-vh-100">
            <title>{title}</title>

            <Header />

            <main className="flex-grow-1 py-4">
                <Container className="px-5" fluid>
                    <Row>
                        <Col className="m-lg-0 mx-auto mb-3" sm={6} lg={3}>
                            <UserCard user={user} />
                        </Col>

                        <Col lg={9}>
                            <section className="section">
                                <header className="section-header">
                                    <h4 className="section-title">Доступные дисциплины <small>({disciplines.length})</small></h4>

                                    <div className="section-filter"></div>
                                </header>

                                <div className="section-content">
                                    {error && (
                                        <Alert variant="danger">{error}</Alert>
                                    )}

                                    <Row>
                                        {
                                            disciplines.map(discipline => {
                                                return (
                                                    <Col key={discipline.guid} className="mt-3" sm={6} lg={4}>
                                                        <Discipline
                                                            discipline={discipline}
                                                            variant="regular"
                                                            onView={handleViewDiscipline}
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
        </div>
    )
}

export default Disciplines
