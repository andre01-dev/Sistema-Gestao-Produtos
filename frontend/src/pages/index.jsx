import './index.scss'
import { useState } from "react";
import { Link } from 'react-router';

export default function App() {
    const [consulta, setConsulta] = useState(false);
    const [adicionar, setAdicionar] = useState(false);
    const [editar, setEditar] = useState(false);
    const [excluir, setExcluir] = useState(false);
    const [abrir, setAbrir] = useState(false);
    const [nomeProduto, setNomeProduto] = useState("Nome do Produto");
    const [descricaoProduto, setDescricaoProduto] = useState("Descrição");
    const [precoProduto, setPrecoProduto] = useState(0);
    const [categoriaProduto, setCategoriaProduto] = useState("Categoria");
    const [quantidadeProduto, setQuantidadeProduto] = useState(0);

    return (
        <div className="app">
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
                        <img
                            src="/src/assets/img/login.png" height={30}
                            alt="user"
                            className="avatar"
                            onClick={() => setAbrir(true)}
                        />
                        <span>Nome_usuario</span>
                    </div>
                {abrir && (
                    <div className="popup-overlay">
                        <div className="popup">
                            <button className="fechar-popup" onClick={() => setAbrir(false)}>×</button>

                            <h2>Login</h2>

                            <label>Email</label>
                            <input type="email" placeholder="Digite seu email" />

                            <label>Senha</label>
                            <input type="password" placeholder="Digite sua senha" />

                            <button className="btn-entrar" onClick={() => setAbrir(false)}>Entrar</button>
                        </div>
                    </div>
                )}
                
                </header>




                <section className="cards">
                    <div className="card">
                        <h4>Total de produtos</h4>
                        <p>586</p>
                    </div>
                    <div className="card">
                        <h4>Total em estoque</h4>
                        <p>586</p>
                    </div>
                    <div className="card">
                        <h4>Produtos com Estoque baixo</h4>
                        <p>586</p>
                    </div>
                    <div className="card">
                        <h4>Produtos por Categorias</h4>
                        <p>Gráfico básico</p>
                    </div>
                </section>

                <section className="actions">
                    <h3>Painel de Ações</h3>
                    <div className="buttons">
                        <button className="btn consultar" onClick={() => setConsulta(true)}>Consultar</button>
                        {consulta && (
                            <div className="consulta-overlay">
                                <div className="consulta-popup">
                                    <button className="consulta-fechar" onClick={() => setConsulta(false)}>×</button>
                                    <h2>Consulta de Produtos</h2>
                                    <p>Consultar por:</p>
                                    <input className="consulta-input" list="opcoes" placeholder="Selecione" />
                                    <datalist id="opcoes">
                                        <option value="Nome"></option>
                                        <option value="Categoria"></option>
                                        <option value="Preço"></option>
                                        <option value="Quantidade"></option>
                                    </datalist>
                                    <button className="consulta-btn" onClick={() => setConsulta(true)}>Consultar</button>

                                    <div className="consulta-resultado">
                                        {/* Aqui aparecerão os cards */}
                                    </div>
                                </div>
                            </div>
                        )}

                        <button className="btn adicionar" onClick={() => setAdicionar(true)} >Adicionar</button>
                        {adicionar && (
                            <div className="popup-overlay">
                                <div className="popup">
                                    <h2>Adicionar Produto</h2>
                                    <label>Nome do Produto</label>
                                    <input type="text" id='input-nome' value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} />
                                    <label>Descrição do Produto</label>
                                    <input type="text" id='input-descricao' value={descricaoProduto} onChange={(e) => setDescricaoProduto(e.target.value)} />
                                    <label>Preço do Produto</label>
                                    <input type="number" id='input-preco' value={precoProduto} onChange={(e) => setPrecoProduto(e.target.value)} />
                                    <label>Categoria do Produto</label>
                                    <input type="text" id='input-categoria' value={categoriaProduto} onChange={(e) => setCategoriaProduto(e.target.value)} />
                                    <label>Quantidade do Produto</label>
                                    <input type="number" id='input-quantidade' value={quantidadeProduto} onChange={(e) => setQuantidadeProduto(e.target.value)} />
                                    <button onClick={() => setAdicionar(false)}>Adicionar</button>
                                </div>
                            </div>
                        )}
                        <button className="btn editar" onClick={() => setEditar(true)}>Editar</button>
                        {editar && (
                            <div className="popup-overlay-editar">
                                <div className="popup-editar">
                                    <h2>Editar Produto</h2>
                                    <label>Informe o nome do produto para Editar:</label>
                                    <input type="text" id='input-nome' value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} />
                                    <button className='bt-buscar' >Buscar</button>
                                    <div className="consulta-resultado">
                                        {/* Aqui aparecerão os cards */}
                                    </div>
                                    <label>Nome do Produto</label>
                                    <input type="text" id='input-nome' value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} />
                                    <label>Descrição do Produto</label>
                                    <input type="text" id='input-descricao' value={descricaoProduto} onChange={(e) => setDescricaoProduto(e.target.value)} />
                                    <label>Categoria do Produto</label>
                                    <input type="text" id='input-categoria' value={categoriaProduto} onChange={(e) => setCategoriaProduto(e.target.value)} />
                                    <div className='ajuste-editar'>
                                        <label>Preço do Produto</label>
                                        <input className='input-preco-editar' type="number" id='input-preco' value={precoProduto} onChange={(e) => setPrecoProduto(e.target.value)} />
                                        <label>Quantidade do Produto</label>
                                        <input className='input-quantidade-editar' type="number" id='input-quantidade' value={quantidadeProduto} onChange={(e) => setQuantidadeProduto(e.target.value)} />
                                    </div>

                                    <button className='bt-editar' onClick={() => setEditar(false)}>Editar</button>
                                </div>
                            </div>
                        )}

                        <button className="btn excluir" onClick={() => setExcluir(true)}>Excluir</button>
                        {excluir && (
                            <div className="popup-overlay-excluir">
                                <div className="popup-excluir">
                                    <h2>Excluir Produto</h2>
                                    <label>Nome do Produto</label>
                                    <input type="text" id='input-nome' value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} />
                                    <button className='bt-buscar-excluir'>Buscar</button>
                                    <div className="consulta-resultado">
                                        {/* Aqui aparecerão os cards */}
                                    </div>
                                    <button className='bt-excluir' onClick={() => setExcluir(false)}>Excluir</button>

                                </div>
                            </div>
                        )}
                    </div>
                </section>

                <section className="ultimos-registros">
                    <h3>📦 Últimos Produtos Adicionados</h3>
                    <ul>
                        <h1>api</h1>
                    </ul>
                </section>

            </main>
        </div>
    );
}