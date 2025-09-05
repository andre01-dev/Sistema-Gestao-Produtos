import { conection } from "./conection.js";

// Adicionar
export async function adicionarProduto(novoProduto) {
    const comando = `
        insert into produtos (nome, descricao, preco, categoria, quantidade)
        values (?,?,?,?,?)
    `;
    const [registros] = await conection.query(comando, [
        novoProduto.nomeProduto,
        novoProduto.descricaoProduto,
        novoProduto.precoProduto,
        novoProduto.categoriaProduto,
        novoProduto.quantidadeProduto
    ]);
    return registros.insertId;
}

// Consultar todos
export async function consultarProdutos() {
    const comando = `
        select * from produtos
    `;
    const [registros] = await conection.query(comando);
    return registros;
}

// Editar
export async function editarProduto(novoProduto) {
    const comando = `
        update produtos
        set nome = ?,
            descricao = ?,
            preco = ?,
            categoria = ?,
            quantidade = ?
        where nome = ?
    `;
    const [registros] = await conection.query(comando, [
        novoProduto.nomeProduto,
        novoProduto.descricaoProduto,
        novoProduto.precoProduto,
        novoProduto.categoriaProduto,
        novoProduto.quantidadeProduto,
        novoProduto.nomeProduto
    ]);
    return registros;
}

// Deletar
export async function deletarProduto(nome) {
    const comando = `
        delete from produtos
        where nome = ?
    `;
    const [registros] = await conection.query(comando, [nome]);
    return registros;
}

// Filtrar por categoria
export async function filtrarCategoria(categoria) {
    const comando = `
        select * from produtos
        where categoria = ?
    `;
    const [registros] = await conection.query(comando, [categoria]);
    return registros;
}

// Filtrar por nome
export async function filtrarNome(nome) {
    const comando = `
        select * from produtos
        where nome = ?
    `;
    const [registros] = await conection.query(comando, [nome]);
    return registros;
}

// import { conection } from "./conection.js";

// export async function adicionarProduto(novoProduto) {
//     const comando = `
//         insert into produtos (nome, descricao, preco, categoria, quantidade)
//         values
//         (?,?,?,?,?)
//     `
//     const [registros] = await conection.query(comando, [
//         novoProduto.nomeProduto,
//         novoProduto.descricaoProduto,
//         novoProduto.precoProduto,
//         novoProduto.categoriaProduto,
//         novoProduto.quantidadeProduto
//     ])
//     return registros.insertId
// }

// export async function consultarProdutos() {
//     const comando = `
//         select*from produtos
//     `
//     const [registros] = await conection.query(comando)
//     return registros
// }

// export async function editarProduto(novoProduto) {
//     const comando = `
//         update produtos
//         set nome = ?,
//             descricao = ?,
//             preco = ?,
//             categoria = ?,
//             quantidade = ?
//         where nome = ?
//     `
//     const [registros] = await conection.query(comando [
//         novoProduto.nomeProduto,
//         novoProduto.descricaoProduto,
//         novoProduto.precoProduto,
//         novoProduto.categoriaProduto,
//         novoProduto.quantidadeProduto,
//         novoProduto.nomeProduto
//     ])
//     return registros
// }

// export async function deletarProduto(nome) {
//     const comando = `
//         delete from produtos
//         where nome = ?
//     `
//     const [registros] = await conection.query(comando [nome])
//     return registros
// }

// export async function filtrarCategoria(categoria) {
//     const comando = `
//         select*from produtos
//         where categoria = ?
//     `
//     const [registros] = await conection.query(comando, [categoria])
//     return registros
// }

// export async function filtrarNome(nome) {
//     const comando = `
//         select*from produtos
//         where nome = ?
//     `
//     const [registros] = await conection.query(comando, [nome])
//     return registros
// }