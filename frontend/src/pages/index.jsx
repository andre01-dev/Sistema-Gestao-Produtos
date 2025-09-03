import './index.scss'

export default function App() {
    return (
        <div className="app">
            <aside className="sidebar">
                <div className='area-logo'>
                <img src="/src/assets/img/logo.png" height={50} alt="" />
                <h2 className="logo">ShopSense</h2>
                </div>
                <nav className='menu-lateral'>
                    <ul>
                        <li>Dashboard</li>
                        <li>Produtos</li>
                        <li>Categorias</li>
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

                
                <section className="cards">
                    <div className="card">
                        <h4>Total de Produtos</h4>
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
                        <button className="btn consultar">Consultar</button>
                        <button className="btn adicionar">Adicionar</button>
                        <button className="btn editar">Editar</button>
                        <button className="btn excluir">Excluir</button>
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