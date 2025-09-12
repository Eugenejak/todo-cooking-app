import { Container, Navbar, Nav } from "react-bootstrap"
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { TodoContext } from "./contexts/TodoContext";
import useLocalStorage from "use-local-storage";
import Plan from "./pages/Plan";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage"
import EditTodo from "./pages/EditTodo";

function Layout() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">Cooking Todo App</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/add">Plan</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
}

export default function App() {
    const [todos, setTodos] = useLocalStorage("todos", []);

    return (
        <TodoContext.Provider value={{ todos, setTodos }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="add" element={<Plan />} />
                        <Route path="*" element={<ErrorPage />} />
                        <Route path="todo/:id" element={<EditTodo />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </TodoContext.Provider>
    );
}

