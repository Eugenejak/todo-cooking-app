import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { TodoContext } from "../contexts/TodoContext";


export default function PlanCard({ todo }) {
    const completed = todo.completed;
    const border = completed ? "success" : "danger";
    const setTodos = useContext(TodoContext).setTodos;

    const deleteTodo = () => {
        setTodos((prevTodos) =>
            prevTodos.filter((prevTodo) => prevTodo.id !== todo.id)
        );
    };

    return (
        <>
            <Card border={border} className="my-3">
                <Card.Header>{!completed && "Not"} Completed</Card.Header>
                <Card.Body>
                    <Card.Title>{todo.title}</Card.Title>
                    <Card.Text>{todo.description}</Card.Text>
                    <Button variant="secondary" href={`todo/${todo.id}`} className="ms-2">
                        <i className="bi bi-pencil"></i>
                    </Button>
                    <Button variant="danger" onClick={deleteTodo} className="ms-2">
                        <i className="bi bi-trash3"></i>
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
}