import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TodoContext } from "../contexts/TodoContext";
import PlanCard from "../components/PlanCard";

export default function Home() {
    const todos = useContext(TodoContext).todos;

    return (
        <Container>
            <h1 className="my-3">Cooking Todo App</h1>
            <p>Eat to Plan, Plan to Eat</p>
            <Row>
                <CardGroup todos={todos} />
            </Row>
        </Container>
    );
}

function CardGroup({ todos }) {
    return todos.map((todo) => {
        return (
            <Col md={4} key={todo.id}>
                <PlanCard todo={todo} />
            </Col>
        );
    });
}