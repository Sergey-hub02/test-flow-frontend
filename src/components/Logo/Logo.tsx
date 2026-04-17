import { NavbarBrand, Image } from 'react-bootstrap'
import logoLightTheme from '@assets/test-flow-icon-64x64-light-theme.svg'
import logoDarkTheme from '@assets/test-flow-icon-64x64-dark-theme.svg'

const Logo = ({ theme }: { theme: 'dark' | 'light' }) => {
    const logo = (theme === 'dark') ? logoDarkTheme : logoLightTheme;
    const textColor = (theme === 'dark') ? 'text-white' : '';

    return (
        <NavbarBrand href="/" className="d-flex align-items-center">
            <Image src={logo} alt="Test Flow" />
            <div className={`d-lg-block d-none ps-2 ${textColor}`}>Test Flow</div>
        </NavbarBrand>
    );
}

export default Logo;
