import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <Container fluid-className="p-0">
            <div
                className="text-center text-white d-flex flex-column justify-content-center align-items-center"
                style={{
                    height: "100vh",
                    backgroundImage: "url('/ public / images / backgorund.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <h1 className="display-3 mb-4">Cooking Todo App</h1>
                <p className="lead mb-4">Plan your day and save your favourite recipes!</p>
                <Button
                    variant="primary"
                    size="lg"
                    onClick={() => navigate("/login")}
                >
                    Get Started
                </Button>
            </div>

            <Container className="my-5">
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Image src="./public/images/image1.jpg" rounded fluid />
                    </Col>
                    <Col>
                        <Image src="./public/images/image2.jpg" rounded fluid />
                    </Col>
                    <Col>
                        <Image src="./public/images/image3.jpg" rounded fluid />
                    </Col>
                </Row>
            </Container>

        </Container>
    );
}

