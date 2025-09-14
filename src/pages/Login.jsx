import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);

    function login() {
        const isCorrectUsername = username === "johndoe@sigmaschool.co";
        const isCorrectPassword = password === "password";
        if (isCorrectUsername && isCorrectPassword) {
            authContext.setToken("1234");
            navigate("/plan");
        }
    }

    return (
        <Container>
            <h1 className="my-3">Login to your account</h1>
            <Form>
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
                <Button variant="primary" onClick={login}>
                    Login
                </Button>
            </Form>
        </Container>
    )
}