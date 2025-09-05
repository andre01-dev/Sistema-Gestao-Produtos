import { Router } from "express";
import { adicionarProduto, consultarProdutos, filtrarNome } from "../repository/produtorepository.js";


const endpoints = Router();

endpoints.post("/adicionar/produto", async (req, resp) => {
    const {
        nomeProduto,
        descricaoProduto,
        precoProduto,
        categoriaProduto,
        quantidadeProduto
    } = req.body;

    const novoProduto = {
        nomeProduto,
        descricaoProduto,
        precoProduto,
        categoriaProduto,
        quantidadeProduto
    }
    const id = await adicionarProduto(novoProduto);

    resp.json({message: "Produto adicionado com sucesso!", id: id})
})

// endpoints.get("/consultar/produto/:nome", async (req,resp) => {
//     const nome = req.params.nome;

//     const registros = await filtrarNome(nome);
//     resp.send({mensagem: registros[0].nome + ', '+ registros[0].descricao+ ', '+ 
//         registros[0].preco+ ', '+ registros[0].categoria+ ', '+ registros[0].quantidade});
// })

endpoints.get("/consultar/produto/:nome", async (req, resp) => {
    const nome = req.params.nome;

    const registros = await filtrarNome(nome);

    if (registros.length === 0) {
        return resp.status(404).send({ mensagem: "Produto não encontrado" });
    }

    resp.send({
        mensagem:
            registros[0].nome + ', ' +
            registros[0].descricao + ', ' +
            registros[0].preco + ', ' +
            registros[0].categoria + ', ' +
            registros[0].quantidade
    });
});



export default endpoints