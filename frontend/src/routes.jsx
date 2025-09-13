import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Inicio from "./pages";
import Categorias from "./pages/categorias";
import Produto from "./pages/produtos";
import Login from "./pages/login";


export default function Navegacao({isLoggedIn, setIsLoggedIn}) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route
                    path="/"
                    element={isLoggedIn ? <Inicio /> : <Navigate to="/login" />}
                />
                <Route
                    path="/produtos"
                    element={isLoggedIn ? <Produto /> : <Navigate to="/login" />}
                />
                <Route
                    path="/categorias"
                    element={isLoggedIn ? <Categorias /> : <Navigate to="/login" />}
                />
            </Routes>
        </BrowserRouter>
    )
}