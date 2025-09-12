import { useContext } from "react";

export default function Home() {
    const todos = useContext(TodoContext).todos;

    return (
        <Container>
            <h1 className="my-3">Cooking Todo App</h1>
            <p>Eat to Plan, Plan to Eat</p>
        </Container>
    );
}