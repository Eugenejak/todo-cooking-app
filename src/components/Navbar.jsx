import { useAuth } from "../contexts/AuthContext"

export default function Navbar() {
    const { isAuthenticated, logout } = useAuth();

    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">Cooking Todo App</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/plan">Plan</Nav.Link>
                    {!isAuthenticated ? (
                        <button>Login</button>
                    ) : (
                        <button onClick={logout}>Logout</button>
                    )}
                </Nav>
            </Container>
        </Navbar>
    )
}