import './produto.scss';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; // use react-router-dom no lugar de react-router

export default function Produto() {
  // Estado para armazenar produtos
  const [produtos, setProdutos] = useState([]);

  // Simulando um fetch de produtos (pode ser substituído por API real)
  useEffect(() => {
    const produtosFake = [
      { id: 1, nome: "Produto A", descricao: "Descrição A", preco: 50, categoria: "Categoria 1", quantidade: 10 },
      { id: 2, nome: "Produto B", descricao: "Descrição B", preco: 100, categoria: "Categoria 2", quantidade: 5 },
      { id: 3, nome: "Produto C", descricao: "Descrição C", preco: 150, categoria: "Categoria 3", quantidade: 8 },
      { id: 4, nome: "Produto D", descricao: "Descrição D", preco: 200, categoria: "Categoria 4", quantidade: 12 },
    ];
    setProdutos(produtosFake);
  }, []);

  return (
    <div className='container-produto'>
      <aside className="sidebar">
        <div className='area-logo'>
          <img src="/src/assets/img/logo.png" height={50} alt="logo" />
          <h2 className="logo">ShopSense</h2>
        </div>
        <nav className='menu-lateral'>
          <ul>
            <Link to='/'><li>Dashboard</li></Link>
            <Link to='/produtos'><li>Produtos</li></Link>
            <Link to='/categorias'><li>Categorias</li></Link>
          </ul>
        </nav>
      </aside>

      <main className="main">
        <header className="header">
          <h3 className='overview'>Overview</h3>
          <div className="user">
            <span>Nome_usuario</span>
            <img
              src="/src/assets/img/login.png"
              height={30}
              alt="user"
              className="avatar"
            />
          </div>
        </header>

        <div className='principal'>
          <div className='todoprodutos'>
            {produtos.length === 0 ? (
              <p>Nenhum produto cadastrado.</p>
            ) : (
              produtos.map(produto => (
                <div key={produto.id} className='todos estilo-total'>
                  <h1 className='total'>{produto.nome}</h1>
                  <p>{produto.descricao}</p>
                  <p>R$ {produto.preco.toFixed(2)}</p>
                  <p>{produto.categoria}</p>
                  <p>Quantidade: {produto.quantidade}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
