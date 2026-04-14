import { Navbar, Container, Dropdown } from 'react-bootstrap'
import Logo from '@components/Logo/Logo'
import SearchBar from '@components/SearchBar/SearchBar'
import './Header.scss'

// TODO: сделать получение фотографии пользователя через JWT-токен

const Header = () => {
    return (
        <Navbar className="flex-nowrap border-bottom bg-white" sticky="top">
            <Container className="px-5" fluid>
                <Logo theme="light" />
                <SearchBar />

                <Dropdown>
                    <Dropdown.Toggle
                        className="d-flex justify-content-center align-items-center bg-dark text-light rounded-circle ms-2 header-profile-picture"
                        aria-controls="header-menu"
                    >
                        <span className="user-initials">PS</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu align="end">
                        <Dropdown.Item href="/">
                            <i className="bi bi-person-circle"></i> Профиль
                        </Dropdown.Item>

                        <Dropdown.Item href="/my-disciplines/">
                            <i className="bi bi-book-half"></i> Мои дисциплины
                        </Dropdown.Item>

                        <Dropdown.Item href="/logout/">
                            <i className="bi bi-box-arrow-right"></i> Выход
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>
    )
}

export default Header;
