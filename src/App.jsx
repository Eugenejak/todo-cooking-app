import { Container, Navbar, Nav } from "react-bootstrap"
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { TodoContext } from "./contexts/TodoContext";
import useLocalStorage from "use-local-storage";
import Plan from "./pages/Plan";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage"
import EditTodo from "./pages/EditTodo";
import Login from "./pages/Login";
import { AuthContext } from "./contexts/AuthContext";
import RequireAuth from "./components/RequireAuth";


function Layout() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">Cooking Todo App</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/plan">Plan</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
}

export default function App() {
    const [token, setToken] = useLocalStorage("token", null);
    const [todos, setTodos] = useLocalStorage("todos", []);

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            <TodoContext.Provider value={{ todos, setTodos }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="/plan" element={
                                <RequireAuth>
                                    <Plan />
                                </RequireAuth>
                            } />
                            <Route path="*" element={<ErrorPage />} />
                            <Route path="/edit" element={<EditTodo />} />
                            <Route path="/login" element={<Login />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </TodoContext.Provider>
        </AuthContext.Provider>
    );
}

