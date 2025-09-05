Documentação do Sistema ShopSense
1. Visão Geral

O ShopSense é um sistema web de gestão de produtos e categorias, pensado para pequenas e médias lojas. Ele permite cadastrar, listar, filtrar, editar e deletar produtos, além de organizar produtos por categorias. O sistema possui uma interface administrativa limpa, com sidebar para navegação entre páginas e popup para filtros.

2. Arquitetura do Sistema

O sistema é dividido em duas partes principais:

Frontend (Interface do Usuário)

Desenvolvido em React.js.

Componentes principais:

Dashboard – Visão geral do sistema.

Produtos – Lista todos os produtos cadastrados em cards, exibindo nome, descrição, preço, categoria e quantidade.

Categorias – Permite filtrar produtos por categoria, nome, preço ou quantidade, usando popup interativo.

Sidebar: Fixa à esquerda, com links para navegar entre Dashboard, Produtos e Categorias.

Header: Mostra o título da página e avatar do usuário.

Popup de Filtro: Aparece ao clicar em "Filtrar a Categoria" e permite selecionar campos para busca.

Backend (API)

Desenvolvido em Node.js com Express.

Banco de dados: MySQL, armazenando produtos e categorias.

Endpoints principais:

GET /consultar/produtos – Retorna todos os produtos.

GET /consultar/produto/:nome – Retorna produto específico por nome.

POST /adicionar/produto – Adiciona novo produto.

PUT /editar/produto – Edita um produto existente.

DELETE /deletar/produto/:nome – Deleta um produto.

GET /filtrar/categoria/:categoria – Retorna produtos filtrados por categoria.

Todas as funções do backend são assíncronas e utilizam consultas parametrizadas para evitar SQL Injection.

3. Fluxo de Funcionamento

O usuário acessa o frontend via navegador.

A sidebar permite alternar entre páginas: Dashboard, Produtos e Categorias.

Na página de produtos:

O frontend faz requisição GET à API para buscar todos os produtos.

Produtos são exibidos em cards com informações detalhadas.

Na página de categorias:

O usuário abre o popup de filtro e escolhe critérios de busca.

O frontend faz requisição à API para retornar produtos filtrados.

Operações de CRUD (adicionar, editar, deletar) interagem diretamente com a API e o banco de dados MySQL.

4. Estrutura do Projeto
shop-sense/
├─ backend/
│  ├─ repository/        → Funções de acesso ao banco (produtorepository.js)
│  ├─ rotas.js           → Definição de endpoints
│  ├─ conection.js       → Configuração da conexão MySQL
│  └─ server.js          → Inicialização do servidor
├─ frontend/
│  ├─ src/
│  │  ├─ components/     → Componentes React (Produtos, Categorias, Dashboard)
│  │  ├─ scss/           → Estilos da aplicação
│  │  ├─ assets/         → Imagens e ícones
│  │  ├─ App.jsx         → Componente principal
│  │  └─ index.js        → Entrada do React
└─ README.md

5. Funcionalidades

Produtos:

Listagem completa.

Visualização de detalhes.

Edição e exclusão de produtos.

Adição de novos produtos via formulário.

Categorias:

Filtro de produtos por categoria, preço, quantidade ou nome.

Popup interativo para selecionar critérios.

Dashboard:

Visão geral do sistema (pode ser expandida para métricas e gráficos futuramente).

6. Tecnologias Utilizadas

Frontend: React.js, React Router DOM, SCSS.

Backend: Node.js, Express, CORS.

Banco de Dados: MySQL.

7. Melhorias Futuras

Implementação de autenticação de usuários e permissões.

Gráficos e relatórios no dashboard.

Busca avançada e filtros múltiplos.

Responsividade completa para dispositivos móveis.

Paginação de produtos para grandes volumes de dados.
