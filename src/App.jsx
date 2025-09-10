import { Container, Col, Row } from "react-bootstrap"

export default function App() {
    return (
        <Container>
            <Row className="text-center mb-4">
                <h1>Cooking Todo App</h1>
                <p>Eat to Plan, Plan to Eat</p>
                <Col sm={3}>
                    <button>Save</button>
                </Col>
                <Col sm={3}>
                    <button>Organize</button>
                </Col>
                <Col sm={3}>
                    <button>Plan</button>
                </Col>
                <Col sm={3}>
                    <button>Shop</button>
                </Col>
                <button>
                    Get Started
                </button>
            </Row>
        </Container>
    );
}

