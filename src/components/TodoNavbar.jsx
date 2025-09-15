import { Container, Navbar, Nav } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom";

export default function TodoNavbar() {
    const { isAuthenticated, logout } = useAuth();

    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/">Cooking Todo App</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/plan">Plan</Nav.Link>
                    {!isAuthenticated ? (
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    ) : (
                        <Nav.Link as={Link} to="/" onClick={logout}>Logout</Nav.Link>
                    )}
                </Nav>
            </Container>
        </Navbar>
    )
}