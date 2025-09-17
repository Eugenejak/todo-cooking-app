import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import PlanCard from "../components/PlanCard";

export default function Plan() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(false);

    const setTodos = useContext(TodoContext).setTodos;
    const todos = useContext(TodoContext).todos;

    function addPlan(e) {
        e.preventDefault();
        setTodos([...todos, { id: Date.now(), title, description, completed }]);
        setTitle("");
        setDescription("");
        setCompleted(false);
    }

    return (
        <Container className="my-4">
            <h1 className="my-4">Plan Recipe</h1>

            <Form onSubmit={addPlan}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Meal</Form.Label>
                    <Form.Control
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="What are you cooking today?"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Recipes</Form.Label>
                    <Form.Control
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        as="textarea"
                        rows={3}
                        placeholder="Recipes"
                        required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>

            <h3 className="mt-5 mb-3">My Plans</h3>
            {todos.length === 0 ? (
                <p>No plans yet? Add a meal to get started!</p>
            ) : (
                <Row xs={1} md={2} lg={3} className="g-4">
                    {todos.map((todo) => (
                        <Col key={todo.id}>
                            <PlanCard todo={todo} />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}

