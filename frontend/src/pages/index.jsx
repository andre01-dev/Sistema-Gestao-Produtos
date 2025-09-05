import './index.scss'
import { useState, useEffect } from "react";
import { Link } from 'react-router';

export default function App() {
    const [consulta, setConsulta] = useState(false);
    const [adicionar, setAdicionar] = useState(false);
    const [editar, setEditar] = useState(false);
    const [excluir, setExcluir] = useState(false);
    const [abrir, setAbrir] = useState(false);
    const [nomeProduto, setNomeProduto] = useState("");
    const [descricaoProduto, setDescricaoProduto] = useState("");
    const [precoProduto, setPrecoProduto] = useState(0);
    const [categoriaProduto, setCategoriaProduto] = useState("");
    const [quantidadeProduto, setQuantidadeProduto] = useState(0);
    const [resultadoConsulta, setResultadoConsulta] = useState(null);
    const [buscarProduto, setBuscarProduto] = useState("");
    const [editarNome, setEditarNome] = useState("");
    const [editarDescricao, setEditarDescricao] = useState("");
    const [editarPreco, setEditarPreco] = useState(0);
    const [editarCategoria, setEditarCategoria] = useState("");
    const [editarQuantidade, setEditarQuantidade] = useState(0);

 
    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        consultarTodos();
    }, []);

    //Consultar por nome
    async function consultarProdutos() {
        const response = await fetch(`http://localhost:5010/consultar/produto/${nomeProduto}`);
        if (response.ok) {
            const data = await response.json();
            setResultadoConsulta(data);
        } else {
            setResultadoConsulta(null);
        }
        setNomeProduto("");
    }

    //Consultar todos
    async function consultarTodos() {
        const response = await fetch("http://localhost:5010/consultar/produtos");
        if (response.ok) {
            const data = await response.json();
            setProdutos(data);
        }
        setNomeProduto("");
    }

    //Buscar produto para editar
    async function buscarProdutoEditar() {
        const response = await fetch(`http://localhost:5010/consultar/produto/${buscarProduto}`);
        if (response.ok) {
            const data = await response.json();
            setEditarNome(data.nome);
            setEditarDescricao(data.descricao);
            setEditarPreco(data.preco);
            setEditarCategoria(data.categoria);
            setEditarQuantidade(data.quantidade);
        } else {
            alert("Produto não encontrado para edição");
        }
    }

    //Adicionar produto
    async function adicionarProduto() {
        const dados = {
            nomeProduto,
            descricaoProduto,
            precoProduto,
            categoriaProduto,
            quantidadeProduto
        };

        const response = await fetch("http://localhost:5010/adicionar/produto", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados)
        });

        if (!response.ok) {
            throw new Error("Erro ao adicionar produto.");
        }

        alert("Produto adicionado com sucesso!");
        setAdicionar(false);
        setNomeProduto("");
        setDescricaoProduto("");
        setPrecoProduto(0);
        setCategoriaProduto("");
        setQuantidadeProduto(0);
        consultarTodos();
    }

    //Editar produto
    async function editarProduto() {
        const dados = {
            nomeProduto: editarNome,
            descricaoProduto: editarDescricao,
            precoProduto: editarPreco,
            categoriaProduto: editarCategoria,
            quantidadeProduto: editarQuantidade
        };

        const response = await fetch("http://localhost:5010/editar/produto", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados)
        });

        if (!response.ok) {
            throw new Error("Erro ao editar produto.");
        }

        alert("Produto editado com sucesso!");
        setEditar(false);
        consultarTodos();
    }

    //Excluir produto
    async function excluirProduto() {
        const response = await fetch(`http://localhost:5010/deletar/produto/${nomeProduto}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Erro ao excluir produto.");
        }

        alert("Produto excluído com sucesso!");
        setExcluir(false);
        setNomeProduto("");
        consultarTodos();
    }

    return (
        <div className="app">
            <aside className="sidebar">
                <div className='area-logo'>
                    <img src="/src/assets/img/logo.png" height={50} alt="" />
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
                        <img
                            src="/src/assets/img/login.png" height={30}
                            alt="user"
                            className="avatar"
                            onClick={() => setAbrir(true)}
                        />
                        <span>Nome_usuario</span>
                    </div>
                </header>

                <section className="actions">
                    <h3>Painel de Ações</h3>
                    <div className="buttons">
                        {/* CONSULTAR */}
                        <button className="btn consultar" onClick={() => setConsulta(true)}>Consultar</button>
                        {consulta && (
                            <div className="consulta-overlay">
                                <div className="consulta-popup">
                                    <button className="consulta-fechar" onClick={() => setConsulta(false)}>×</button>
                                    <h2>Consulta de Produtos</h2>
                                    <input className="consulta-input" value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} />
                                    <button className="consulta-btn" onClick={consultarProdutos}>Consultar</button>
                                    <div className="consulta-resultado">
                                        {resultadoConsulta ? (
                                            <div className="produto-card">
                                                <h3>{resultadoConsulta.nome}</h3>
                                                <p><strong>Descrição:</strong> {resultadoConsulta.descricao}</p>
                                                <p><strong>Categoria:</strong> {resultadoConsulta.categoria}</p>
                                                <p><strong>Preço:</strong> R$ {resultadoConsulta.preco}</p>
                                                <p><strong>Quantidade:</strong> {resultadoConsulta.quantidade} unidades</p>
                                            </div>
                                        ) : (
                                            <p>Nenhum produto encontrado</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ADICIONAR */}
                        <button className="btn adicionar" onClick={() => setAdicionar(true)}>Adicionar</button>
                        {adicionar && (
                            <div className="popup-overlay">
                                <div className="popup">
                                    <button className="popup-close" onClick={() => setAdicionar(false)}>✖</button>
                                    <h2>Adicionar Produto</h2>
                                    <input type="text" placeholder="Nome" value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} />
                                    <input type="text" placeholder="Descrição" value={descricaoProduto} onChange={(e) => setDescricaoProduto(e.target.value)} />
                                    <input type="number" placeholder="Preço" value={precoProduto} onChange={(e) => setPrecoProduto(e.target.value)} />
                                    <input type="text" placeholder="Categoria" value={categoriaProduto} onChange={(e) => setCategoriaProduto(e.target.value)} />
                                    <input type="number" placeholder="Quantidade" value={quantidadeProduto} onChange={(e) => setQuantidadeProduto(e.target.value)} />
                                    <button onClick={adicionarProduto}>Adicionar</button>
                                </div>
                            </div>
                        )}

                        {/* EDITAR */}
                        <button className="btn editar" onClick={() => setEditar(true)}>Editar</button>
                        {editar && (
                            <div className="popup-overlay-editar">
                                <div className="popup-editar">
                                    <button className="popup-close" onClick={() => setEditar(false)}>✖</button>
                                    <h2>Editar Produto</h2>
                                    <input type="text" placeholder="Buscar Produto" value={buscarProduto} onChange={(e) => setBuscarProduto(e.target.value)} />
                                    <button className="bt-buscar" onClick={buscarProdutoEditar}>Buscar</button>

                                    <input type="text" placeholder="Nome" value={editarNome} onChange={(e) => setEditarNome(e.target.value)} />
                                    <input type="text" placeholder="Descrição" value={editarDescricao} onChange={(e) => setEditarDescricao(e.target.value)} />
                                    <input type="number" placeholder="Preço" value={editarPreco} onChange={(e) => setEditarPreco(e.target.value)} />
                                    <input type="text" placeholder="Categoria" value={editarCategoria} onChange={(e) => setEditarCategoria(e.target.value)} />
                                    <input type="number" placeholder="Quantidade" value={editarQuantidade} onChange={(e) => setEditarQuantidade(e.target.value)} />

                                    <button onClick={editarProduto}>Salvar Edição</button>
                                </div>
                            </div>
                        )}

                        {/* EXCLUIR */}
                        <button className="btn excluir" onClick={() => setExcluir(true)}>Excluir</button>
                        {excluir && (
                            <div className="popup-overlay-excluir">
                                <div className="popup-excluir">
                                    <button className="popup-close" onClick={() => setExcluir(false)}>✖</button>
                                    <h2>Excluir Produto</h2>
                                    <input type="text" placeholder="Nome do Produto" value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} />
                                    <button className="bt-excluir" onClick={excluirProduto}>Excluir</button>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* LISTAGEM */}
                <section className="ultimos-registros">
                    <h3>📦 Últimos Produtos Adicionados</h3>
                    <ul>
                        {produtos.map((p) => (
                            <li key={p.id}>
                                <strong>{p.nome}</strong> - {p.categoria} - {p.quantidade} unid. - R$ {p.preco}
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
}



// import './index.scss'
// import { useState } from "react";
// import { Link } from 'react-router';

// export default function App() {
//     const [consulta, setConsulta] = useState(false);
//     const [adicionar, setAdicionar] = useState(false);
//     const [editar, setEditar] = useState(false);
//     const [excluir, setExcluir] = useState(false);
//     const [abrir, setAbrir] = useState(false);
//     const [nomeProduto, setNomeProduto] = useState("Nome do Produto");
//     const [descricaoProduto, setDescricaoProduto] = useState("Descrição");
//     const [precoProduto, setPrecoProduto] = useState(0);
//     const [categoriaProduto, setCategoriaProduto] = useState("Categoria");
//     const [quantidadeProduto, setQuantidadeProduto] = useState(0);
//     const [resultadoConsulta, setResultadoConsulta] = useState("");
//     const [resultadoConsulta2, setResultadoConsulta2] = useState("");
//     const [buscarProduto, setBuscarProduto] = useState("");
//     const [editarNome, setEditarNome] = useState("");
//     const [editarDescricao, setEditarDescricao] = useState("");
//     const [editarPreco, setEditarPreco] = useState(0);
//     const [editarCategoria, setEditarCategoria] = useState("");
//     const [editarQuantidade, setEditarQuantidade] = useState(0);



//     // async function consultarProdutos() {
//     //     const response = await fetch(`http://localhost:5010/consultar/produto/${buscarProduto}`, {
//     //         method: "GET",
//     //         headers: { "Content-Type": "application/json" }
//     //     });

//     //     const data = await response.json();
//     //     setResultadoConsulta(data.mensagem);
//     // }

//     async function consultarProdutos() {
//     const response = await fetch(`http://localhost:5010/consultar/produto/${nomeProduto}`, {
//         method: "GET",
//         headers: { "Content-Type": "application/json" }
//     });

//     const data = await response.json();

//     if (data) {
//         setResultadoConsulta(
//             `${data.nome}, ${data.descricao}, ${data.preco}, ${data.categoria}, ${data.quantidade}`
//         );
//     } else {
//         setResultadoConsulta("Produto não encontrado");
//     }
// }

//     async function buscarProdutoEditar() {
//         const response = await fetch(`http://localhost:5010/consultar/produto/${nomeProduto}`, {
//             method: "GET",
//             headers: { "Content-Type": "application/json" }
//         });
//         const data = await response.json();
//         setResultadoConsulta2(data.mensagem);
//     }

    


//     async function adicionarProduto() {
//         const dados = {
//             nomeProduto,
//             descricaoProduto,
//             precoProduto,
//             categoriaProduto,
//             quantidadeProduto
//         }

//         const response = await fetch("http://localhost:5010/adicionar/produto", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(dados)
//         });

//         if (!response.ok) {
//             throw new Error("Erro ao adicionar produto.");
//         }

//         alert("Produto adicionado com sucesso!");
//         setNomeProduto("");
//         setDescricaoProduto("");
//         setPrecoProduto("");
//         setCategoriaProduto("");
//         setQuantidadeProduto("");

//     }

//     async function editarProduto() {
//         const dados = {
//             nomeProduto,
//             descricaoProduto,
//             precoProduto,
//             categoriaProduto,
//             quantidadeProduto,
//             nomeProduto
//         }

//         const response = await fetch("http://localhost:5010/editar/produto", {
//             method: "PUT",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(dados)

//         });

//         if (!response.ok) {
//             throw new Error("Erro ao adicionar produto.");
//         }

//         alert("Produto adicionado com sucesso!");
//         setNomeProduto("");
//         setDescricaoProduto("");
//         setPrecoProduto("");
//         setCategoriaProduto("");
//         setQuantidadeProduto("");
//     }


//     return (
//         <div className="app">
//             <aside className="sidebar">
//                 <div className='area-logo'>
//                     <img src="/src/assets/img/logo.png" height={50} alt="" />
//                     <h2 className="logo">ShopSense</h2>
//                 </div>
//                 <nav className='menu-lateral'>
//                     <ul>
//                         <Link to='/'>
//                             <li>Dashboard</li>
//                         </Link>
//                         <Link to='/produtos'>
//                             <li>Produtos</li>
//                         </Link>
//                         <Link to='/categorias'>
//                             <li>Categorias</li>
//                         </Link>
//                     </ul>
//                 </nav>
//             </aside>


//             <main className="main">

//                 <header className="header">
//                     <h3 className='overview'>Overview</h3>
//                     <div className="user">
//                         <img
//                             src="/src/assets/img/login.png" height={30}
//                             alt="user"
//                             className="avatar"
//                             onClick={() => setAbrir(true)}
//                         />
//                         <span>Nome_usuario</span>
//                     </div>
//                     {abrir && (
//                         <div className="popup-overlay">
//                             <div className="popup">
//                                 <button className="fechar-popup" onClick={() => setAbrir(false)}>×</button>

//                                 <h2>Login</h2>

//                                 <label>Email</label>
//                                 <input type="email" placeholder="Digite seu email" />

//                                 <label>Senha</label>
//                                 <input type="password" placeholder="Digite sua senha" />

//                                 <button className="consulta-btn" onClick={() => { setConsulta(true); consultarProdutos(); }}>Consultar</button>


//                             </div>
//                         </div>
//                     )}
//                 </header>


//                 <section className="cards">
//                     <div className="card">
//                         <h4>Total de produtos</h4>
//                         <p>586</p>
//                     </div>
//                     <div className="card">
//                         <h4>Total em estoque</h4>
//                         <p>586</p>
//                     </div>
//                     <div className="card">
//                         <h4>Produtos com Estoque baixo</h4>
//                         <p>586</p>
//                     </div>
//                     <div className="card">
//                         <h4>Produtos por Categorias</h4>
//                         <p>Gráfico básico</p>
//                     </div>
//                 </section>

//                 <section className="actions">
//                     <h3>Painel de Ações</h3>
//                     <div className="buttons">
//                         <button className="btn consultar" onClick={() => setConsulta(true)}>Consultar</button>
//                         {consulta && (
//                             <div className="consulta-overlay">
//                                 <div className="consulta-popup">
//                                     <button className="consulta-fechar" onClick={() => setConsulta(false)}>×</button>
//                                     <h2>Consulta de Produtos</h2>
//                                     <p>Informe o nome do produto:</p>
//                                     <input className="consulta-input" value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} />

//                                     <button className="consulta-btn" onClick={() => { setConsulta(true); consultarProdutos() }}>Consultar</button>

//                                     <div className="consulta-resultado">
//                                         <p>{resultadoConsulta}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}

//                         <button className="btn adicionar" onClick={() => setAdicionar(true)} >Adicionar</button>
//                         {adicionar && (
//                             <div className="popup-overlay">
//                                 <div className="popup">
//                                     {/* Botão X para fechar */}
//                                     <button
//                                         className="popup-close"
//                                         onClick={() => setAdicionar(false)}
//                                     >
//                                         ✖
//                                     </button>

//                                     <h2>Adicionar Produto</h2>
//                                     <label>Nome do Produto</label>
//                                     <input
//                                         type="text"
//                                         id="input-nome"
//                                         value={nomeProduto}
//                                         onChange={(e) => setNomeProduto(e.target.value)}
//                                     />
//                                     <label>Descrição do Produto</label>
//                                     <input
//                                         type="text"
//                                         id="input-descricao"
//                                         value={descricaoProduto}
//                                         onChange={(e) => setDescricaoProduto(e.target.value)}
//                                     />
//                                     <label>Preço do Produto</label>
//                                     <input
//                                         type="number"
//                                         id="input-preco"
//                                         value={precoProduto}
//                                         onChange={(e) => setPrecoProduto(e.target.value)}
//                                     />
//                                     <label>Categoria do Produto</label>
//                                     <input
//                                         type="text"
//                                         id="input-categoria"
//                                         value={categoriaProduto}
//                                         onChange={(e) => setCategoriaProduto(e.target.value)}
//                                     />
//                                     <label>Quantidade do Produto</label>
//                                     <input
//                                         type="number"
//                                         id="input-quantidade"
//                                         value={quantidadeProduto}
//                                         onChange={(e) => setQuantidadeProduto(e.target.value)}
//                                     />

//                                     <button
//                                         onClick={() => {
//                                             setAdicionar(false);
//                                             adicionarProduto();
//                                         }}
//                                     >
//                                         Adicionar
//                                     </button>
//                                 </div>
//                             </div>
//                         )}

//                         <button className="btn editar" onClick={() => setEditar(true)}>Editar</button>
//                         {editar && (
//                             <div className="popup-overlay-editar">
//                                 <div className="popup-editar">
//                                     {/* Botão X para fechar */}
//                                     <button
//                                         className="popup-close"
//                                         onClick={() => setEditar(false)}
//                                     >
//                                         ✖
//                                     </button>

//                                     <h2>Editar Produto</h2>
//                                     <label>Informe o nome do produto para Editar:</label>
//                                     <input
//                                         type="text"
//                                         id="input-nome"
//                                         value={buscarProduto}
//                                         onChange={(e) => setBuscarProduto(e.target.value)}
//                                     />
//                                     <button className="bt-buscar" onClick={buscarProdutoEditar}>Buscar</button>

//                                     <div className="consulta-resultado">
//                                         <p>{resultadoConsulta2}</p>
//                                     </div>

//                                     <label>Nome do Produto</label>
//                                     <input
//                                         type="text"
//                                         id="input-nome"
//                                         value={editarNome}
//                                         onChange={(e) => setEditarNome(e.target.value)}
//                                     />

//                                     <label>Descrição do Produto</label>
//                                     <input
//                                         type="text"
//                                         id="input-descricao"
//                                         value={editarDescricao}
//                                         onChange={(e) => setEditarDescricao(e.target.value)}
//                                     />

//                                     <label>Categoria do Produto</label>
//                                     <input
//                                         type="text"
//                                         id="input-categoria"
//                                         value={editarCategoria}
//                                         onChange={(e) => setEditarCategoria(e.target.value)}
//                                     />

//                                     <div className="ajuste-editar">
//                                         <label>Preço do Produto</label>
//                                         <input
//                                             className="input-preco-editar"
//                                             type="number"
//                                             id="input-preco"
//                                             value={editarPreco}
//                                             onChange={(e) => setEditarPreco(e.target.value)}
//                                         />
//                                         <label>Quantidade do Produto</label>
//                                         <input
//                                             className="input-quantidade-editar"
//                                             type="number"
//                                             id="input-quantidade"
//                                             value={editarQuantidade}
//                                             onChange={(e) => setEditarQuantidade(e.target.value)}
//                                         />
//                                     </div>

//                                 </div>

//                                 <button
//                                     onClick={() => {
//                                         setAdicionar(false);
//                                         editarProduto();
//                                     }}
//                                 >
//                                     Editar
//                                 </button>
//                             </div>
                            
//                         )}


//                     <button className="btn excluir" onClick={() => setExcluir(true)}>Excluir</button>
//                     {excluir && (
//                         <div className="popup-overlay-excluir">
//                             <div className="popup-excluir">
//                                 {/* Botão X para fechar */}
//                                 <button
//                                     className="popup-close"
//                                     onClick={() => setExcluir(false)}
//                                 >
//                                     ✖
//                                 </button>

//                                 <h2>Excluir Produto</h2>
//                                 <label>Nome do Produto</label>
//                                 <input
//                                     type="text"
//                                     id="input-nome"
//                                     value={nomeProduto}
//                                     onChange={(e) => setNomeProduto(e.target.value)}
//                                 />

//                                 <button className="bt-buscar-excluir">Buscar</button>

//                                 <div className="consulta-resultado">
//                                     {/* Aqui aparecerão os cards */}
//                                 </div>

//                                 <button className="bt-excluir" onClick={() => setExcluir(false)}>
//                                     Excluir
//                                 </button>
//                             </div>
//                         </div>
//                     )}

//                 </div>
//             </section>

//             <section className="ultimos-registros">
//                 <h3>📦 Últimos Produtos Adicionados</h3>
//                 <ul>
//                     <h1>api</h1>
//                 </ul>
//             </section>

//         </main>
//         </div >
//     );
// }