import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <Container fluid-className="p-0">
            <div
                className="text-center text-white d-flex flex-column justify-content-center align-items-center"
                style={{
                    height: "100vh",
                    backgroundImage: 'url("/images/background.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <h2 style={{ color: "black" }} className=" text-black bg-white display-3 mb-4">Welcome to Cooking App</h2>
                <p style={{ color: "black" }} className="text-black bg-white lead mb-4">Plan your day and save your favourite recipes!</p>
                <Button
                    variant="primary"
                    size="lg"
                    onClick={() => navigate("/login")}
                >
                    Get Started
                </Button>
            </div>

        </Container>
    );
}

