import { NavbarBrand, Image } from "react-bootstrap";
import testFlowLogo from '@assets/test-flow-icon-64x64.svg';

const Logo = () => {
    return (
        <NavbarBrand href="/" className="d-flex align-items-center">
            <Image src={testFlowLogo} alt="Test Flow" />
            <div className="d-lg-block d-none ps-2">Test Flow</div>
        </NavbarBrand>
    );
}

export default Logo;
