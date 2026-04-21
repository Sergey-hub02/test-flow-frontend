import { Button, Container, Form, Image } from 'react-bootstrap';
import testFlowIcon from '@/assets/test-flow-icon-128x128.svg';
import '../auth.scss';

const Login = ({ title }: { title: string }) => {
    return (
        <>
            <title>{title}</title>

            <Container className="auth-container py-4" fluid>
                <Form>
                    <Form.Group className="mb-3 text-center">
                        <Image src={testFlowIcon} alt="Test Flow" fluid />
                    </Form.Group>

                    <Form.Group className="mb-3 text-center">
                        <h3 className="fw-semibold">{title}</h3>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="email" className="fw-semibold">E-mail</Form.Label>

                        <Form.Control
                            id="email"
                            name="email"
                            type="email"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="password" className="fw-semibold">Пароль</Form.Label>

                        <Form.Control
                            id="password"
                            name="password"
                            type="password"
                        />
                    </Form.Group>

                    <Form.Group className="mb-1 text-center">
                        <Button
                            type="submit"
                            className="bg-dark"
                            variant="primary"
                        >Войти &rarr;</Button>
                    </Form.Group>

                    <Form.Group className="text-center">
                        <Button href="/auth/register/" variant="link">Перейти к регистрации</Button>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}

export default Login;
