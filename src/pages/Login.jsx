import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();

    function userLogin(e) {
        e.preventDefault();
        const sucessfulLogin = login(username, password);
        if (sucessfulLogin) {
            const from = location.state?.from?.pathname || "/";
            navigate(from, { replace: true })
        } else {
            alert("Invalid username or password");
        };
    }

    return (
        <Container>
            <h1 className="my-3">Login to your account</h1>
            <Form onSubmit={userLogin}>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    )
}