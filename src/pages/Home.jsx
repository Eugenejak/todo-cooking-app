import { Container } from "react-bootstrap";
import TodoNavbar from "../components/TodoNavbar";

export default function Home() {

    return (
        <Container>
            <TodoNavbar />
            <h1 className="my-3">Cooking Todo App</h1>
            <p>Eat to Plan, Plan to Eat</p>
        </Container>
    );
}

