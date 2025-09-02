import './index.scss'
export default function Inicio() {
    return (
        <div className='body'>

            <div className='header'>
                <div className='logo-area'>
                <img className='logo' src="/src/assets/img/logo.png" alt="" />
                <h1 className='nm-logo'>ShopSence</h1>
                </div>
                <div className='login'>
                <img className='img-login' src="/src/assets/img/login.png" alt="" />
                <h3 className='nm-usuario'>Nome de Usuário</h3>
                </div>
            </div>

            <div className='corpo'>

                <div className='menu-lateral'>

                    <div className='dashboard'>
                        <img className='img-dashboard' src="/src/assets/img/home.png" alt="" />
                        <h2 className='nm-menu'>Dashboard</h2>
                    </div>

                    <div className='produtos'>
                        <img className='img-produtos' src="/src/assets/img/produtos.png" alt="" />
                        <h2 className='nm-menu'>Produtos</h2>
                    </div>

                    <div className='categorias'>
                        <img className='img-categorias' src="/src/assets/img/categorias.png" alt="" />
                        <h2 className='nm-menu'>Categorias</h2>
                    </div>

                </div>

                <div className='principal'>

                    <div className='cards'>

                    <div className='total-produtos estilo-total'>
                        <h1 className='total'>Total Produtos</h1>
                    </div>

                    <div className='total-produtos estilo-total'>
                        <h1 className='total'>Total Vendido</h1>
                    </div>

                    <div className='total-produtos estilo-total'>
                        <h1 className='total'>Baixo Estoque</h1>
                    </div>

                    <div className='total-produtos estilo-total'>
                        <h1 className='total'>Gráfico Produto por Categoria</h1>
                    </div>

                    </div>

                    <div className='menu-rapido'>

                    <div className='consultarTodosProdutos'>
                        <button className='estilo-rapido consultar'>Consultar Produtos</button>
                    </div>

                    <div className='adicionar-produto'>
                        <button className='estilo-rapido adicionar'>Adicionar Produto</button>
                    </div>

                    <div className='editar-produto'>
                        <button className='estilo-rapido editar'>Editar Produto</button>
                    </div>

                    <div className='Remover-produto'>
                        <button className='estilo-rapido remover'>Remover Produto</button>
                    </div> 

                    </div>
                    

                </div>

            </div>


        </div>
    );
}