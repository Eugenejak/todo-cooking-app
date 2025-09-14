import { Container, Navbar, Nav } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext"

export default function TodoNavbar() {
    const { isAuthenticated, logout } = useAuth();

    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">Cooking Todo App</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/plan">Plan</Nav.Link>
                    {!isAuthenticated ? (
                        <Nav.Link href="/login">Login</Nav.Link>
                    ) : (
                        <Nav.Link href="/logout">Logout</Nav.Link>
                    )}
                </Nav>
            </Container>
        </Navbar>
    )
}