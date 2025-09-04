import { BrowserRouter, Routes, Route } from "react-router";

import Inicio from "./pages";
import Categorias from "./pages/categorias";
import Produto from "./pages/produtos";


export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />}/>
                <Route path="/produtos" element={<Produto />}/>
                <Route path="/categorias" element={<Categorias />}/>
            </Routes>
        </BrowserRouter>
    )
}