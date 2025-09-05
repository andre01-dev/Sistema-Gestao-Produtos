import { conection } from "./conection.js";

export async function adicionarProduto(novoProduto) {
    const comando = `
        insert into produtos (nome, descricao, preco, categoria, quantidade)
        values
        (?,?,?,?,?)
    `
    const [registros] = await conection.query(comando, [
        novoProduto.nomeProduto,
        novoProduto.descricaoProduto,
        novoProduto.precoProduto,
        novoProduto.categoriaProduto,
        novoProduto.quantidadeProduto
    ])
    return registros.insertId
}

export async function consultarProdutos() {
    const comando = `
        select*from produtos
    `
    const [registros] = await conection.query(comando)
    return registros
}

export async function editarProduto(nome,novoProduto) {
    const comando = `
        update produtos
        set nome = ?,
            descricao = ?,
            preco = ?,
            categoria = ?,
            quantidade = ?
        where nome = ?
    `
    const [registros] = await conection.query(comando [
        novoProduto.nome,
        novoProduto.descricao,
        novoProduto.preco,
        novoProduto.categoria,
        novoProduto.quantidade,
        nome
    ])
    return registros
}

export async function deletarProduto(nome) {
    const comando = `
        delete from produtos
        where nome = ?
    `
    const [registros] = await conection.query(comando [nome])
    return registros
}

export async function filtrarCategoria(categoria) {
    const comando = `
        select*from produtos
        where categoria = ?
    `
    const [registros] = await conection.query(comando, [categoria])
    return registros
}

export async function filtrarNome(nome) {
    const comando = `
        select*from produtos
        where nome = ?
    `
    const [registros] = await conection.query(comando, [nome])
    return registros
}