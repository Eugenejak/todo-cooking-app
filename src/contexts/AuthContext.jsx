import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null)

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        if (savedToken) {
            setToken(savedToken);
        }
    }, [])

    const login = (username, password) => {
        if (username === "johndoe@sigmaschool.co" && password === "strongPassword") {
            const loginToken = "1234";
            setToken(loginToken);
            localStorage.setItem("token", loginToken)
            return true;
        } else {
            return false;
        };
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem("token");
    };

    const isAuthenticated = token ? true : false;

    return (
        <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

