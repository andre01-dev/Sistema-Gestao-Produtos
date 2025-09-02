import './produto.scss'

export default function Produto() {
    return (
        <div container-produto>
            <div className='header'>
                <img className='logo' src="/src/assets/img/logo.png" alt="" />
                <h1 className='nm-logo'>ShopSence</h1>
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

                    <div className='todoprodutos'>

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

                    <div className='todos estilo-total'>
                        <h1 className='total'>Nome Produto</h1>
                        <p>Descrição</p>
                        <p>Preço</p>
                        <p>Categoria</p>
                    </div>

                

                    </div>
                    </div>

                </div>
            
        </div>
    );
}