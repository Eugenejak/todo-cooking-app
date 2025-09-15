import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { TodoContext } from "./contexts/TodoContext";
import useLocalStorage from "use-local-storage";
import Plan from "./pages/Plan";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage"
import EditTodo from "./pages/EditTodo";
import Login from "./pages/Login";
import { AuthProvider } from "./contexts/AuthContext";
import RequireAuth from "./components/RequireAuth";
import TodoNavbar from "./components/TodoNavbar";


function Layout() {
    return (
        <>
            <TodoNavbar />
            <Outlet />
        </>
    );
}

export default function App() {
    const [todos, setTodos] = useLocalStorage("todos", []);

    return (
        <AuthProvider>
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
        </AuthProvider>
    );
}

