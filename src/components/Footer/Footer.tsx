import { Container, Navbar, Nav, Col } from 'react-bootstrap';
import Logo from '@components/Logo/Logo'

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-3">
            <Container className="px-5" fluid>
                <Navbar className="flex-wrap">
                    <Col className="d-flex justify-content-lg-start justify-content-center" xs={12} lg={3}>
                        <Logo theme="dark" />
                    </Col>

                    <Col xs={12} lg={9}>
                        <Navbar.Collapse className="justify-content-lg-end justify-content-center">
                            <Nav className="flex-md-row flex-column text-md-start text-center">
                                <Nav.Link className="link-info" href="/about/">О проекте</Nav.Link>
                                <Nav.Link className="link-info" href="/author/">Контакты автора</Nav.Link>
                                <Nav.Link className="link-info" href="/policy/">Политика конфиденциальности</Nav.Link>
                                <Nav.Link className="link-info" href="/user-agreement/">Пользовательское соглашение</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Navbar>

                <div className="text-center">&copy; <strong>Test Flow</strong> &mdash; проект, выполненный в рамках магистерской диссертации студента 2 курса РТУ МИРЭА Пака С.А. Проект носит учебно-демонстрационный характер</div>
            </Container>
        </footer>
    )
}

export default Footer;
