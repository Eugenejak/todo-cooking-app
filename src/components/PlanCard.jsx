import { useContext } from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { TodoContext } from "../contexts/TodoContext";
import { useNavigate } from "react-router-dom";


export default function PlanCard({ todo }) {
    const { todos, setTodos } = useContext(TodoContext)
    const navigate = useNavigate();

    const toggleCompleted = () => {
        setTodos(
            todos.map((t) =>
                t.id === todo.id ? { ...t, completed: !t.completed } : t
            )
        );
    };
    const deleteTodo = () => {
        setTodos((prevTodos) =>
            prevTodos.filter((prevTodo) => prevTodo.id !== todo.id)
        );
    };

    const editTodo = () => {
        navigate(`/edit/${todo.id}`)
    };

    return (
        <>
            <Card border={todo.completed ? "success" : "warning"} className="my-3 h-100">
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <span>{todo.completed ? "Completed" : "Not Completed"}</span>
                    <Badge bg={todo.completed ? "success" : "warning"}>
                        {todo.completed ? <i className="bi bi-check-circle"></i> : <i className="bi bi-x-circle"></i>}
                    </Badge>
                </Card.Header>

                <Card.Body>
                    <Card.Title>{todo.title}</Card.Title>
                    <Card.Text>{todo.description}</Card.Text>
                </Card.Body>

                <Card.Footer className="d-flex justify-content-between">
                    <Button variant="secondary" onClick={editTodo}>
                        <i className="bi bi-pencil-square"></i> Edit
                    </Button>
                    <Button variant={todo.completed ? "success" : "warning"} onClick={toggleCompleted}>
                        {todo.completed ? "Mark Incomplete" : "Mark Complete"}
                    </Button>
                    <Button variant="danger" onClick={deleteTodo}>
                        <i className="bi bi-trash2"></i>
                    </Button>
                </Card.Footer>
            </Card>
        </>
    );
}