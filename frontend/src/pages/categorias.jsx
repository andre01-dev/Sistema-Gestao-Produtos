import './categoria.scss'
import { Link } from 'react-router';
import { useState } from "react";

export default function Categorias() {

    const [popupFiltro, setPopupFiltro] = useState(false);

    return (
        <div className='container-categorias'>
            <aside className="sidebar">
                <div className='area-logo'>
                    <img src="/src/assets/img/logo.png" height={50} alt="" />
                    <h2 className="logo">ShopSense</h2>
                </div>
                <nav className='menu-lateral'>
                    <ul>
                        <Link to='/'>
                            <li>Dashboard</li>
                        </Link>
                        <Link to='/produtos'>
                            <li>Produtos</li>
                        </Link>
                        <Link to='/categorias'>
                            <li>Categorias</li>
                        </Link>
                    </ul>
                </nav>
            </aside>


            <main className="main">

                <header className="header">
                    <h3 className='overview'>Overview</h3>
                    <div className="user">
                        <span>Nome_usuario</span>
                        <img
                            src="/src/assets/img/login.png" height={30}
                            alt="user"
                            className="avatar"
                        />
                    </div>
                </header>
                <div className='filtrar'>
                    <button className="btn-filtro" onClick={() => setPopupFiltro(true)}>
                        <span className="icon">🔍</span>
                        <span className="text">Filtrar a Categoria</span>
                    </button>
                </div>

                {popupFiltro && (
                    <div className="popup-overlay-filtro">
                        <div className="popup-filtro">
                            <button className="fechar-popup-filtro" onClick={() => setPopupFiltro(false)}>×</button>

                            <h2>Filtrar Produtos</h2>

                            <label>Escolha um campo para buscar:</label>
                            <input list="opcoes-filtro" placeholder="Selecione" />
                            <datalist id="opcoes-filtro">
                                <option value="Nome"></option>
                                <option value="Categoria"></option>
                                <option value="Preço"></option>
                                <option value="Quantidade"></option>
                            </datalist>

                            <button className="btn-buscar">Buscar</button>
                        </div>
                    </div>
                )}


            </main>
        </div>
    );
}