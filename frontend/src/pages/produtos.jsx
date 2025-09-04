import './produto.scss'
import { useState } from "react";
import { Link } from 'react-router';

export default function Produto() {
    return (
        <div className='container-produto'>
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

                <div className='principal'>

                    <div className='todoprodutos'>

                        <div className='todos estilo-total'>
                            <h1 className='total'>Nome Produto</h1>
                            <p>Descrição</p>
                            <p>Preço</p>
                            <p>Categoria</p>
                            <p>Quantidade</p>
                        </div>

                        <div className='todos estilo-total'>
                            <h1 className='total'>Nome Produto</h1>
                            <p>Descrição</p>
                            <p>Preço</p>
                            <p>Categoria</p>
                        </div>

                        <div className='todos estilo-total'>
                            <h1 className='total'>Nome Produto</h1>
                            <p>Descrição</p>
                            <p>Preço</p>
                            <p>Categoria</p>
                        </div>

                        <div className='todos estilo-total'>
                            <h1 className='total'>Nome Produto</h1>
                            <p>Descrição</p>
                            <p>Preço</p>
                            <p>Categoria</p>
                        </div>



                    </div>
                </div>
            </main>
        </div>


    );
}