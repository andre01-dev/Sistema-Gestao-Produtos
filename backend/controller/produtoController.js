import { Router } from "express";
import { adicionarProduto, consultarProdutos, editarProduto, filtrarNome, deletarProduto } from "../repository/produtorepository.js";

const endpoints = Router();

// Adicionar produto
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
    };

    const id = await adicionarProduto(novoProduto);

    resp.json({ message: "Produto adicionado com sucesso!", id: id });
});

// Consultar por nome
endpoints.get("/consultar/produto/:nome", async (req, resp) => {
    const nome = req.params.nome;

    const registros = await filtrarNome(nome);

    if (registros.length === 0) {
        return resp.status(404).send({ mensagem: "Produto não encontrado" });
    }

    resp.send(registros[0]);
});

// Consultar todos
endpoints.get("/consultar/produtos", async (req, resp) => {
    const registros = await consultarProdutos();
    resp.send(registros);
});

// Editar produto
endpoints.put("/editar/produto", async (req, resp) => {
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
    };

    const registros = await editarProduto(novoProduto);

    if (registros.affectedRows === 0) {
        return resp.status(404).json({ message: "Produto não encontrado para edição" });
    }

    resp.json({ message: "Produto editado com sucesso!" });
});

// Deletar produto
endpoints.delete("/deletar/produto/:nome", async (req, resp) => {
    const nome = req.params.nome;

    const registros = await deletarProduto(nome);

    if (registros.affectedRows === 0) {
        return resp.status(404).json({ message: "Produto não encontrado para exclusão" });
    }

    resp.json({ message: "Produto deletado com sucesso!" });
});

export default endpoints;


// import { Router } from "express";
// import { adicionarProduto, consultarProdutos, editarProduto, filtrarNome } from "../repository/produtorepository.js";


// const endpoints = Router();

// endpoints.post("/adicionar/produto", async (req, resp) => {
//     const {
//         nomeProduto,
//         descricaoProduto,
//         precoProduto,
//         categoriaProduto,
//         quantidadeProduto
//     } = req.body;

//     const novoProduto = {
//         nomeProduto,
//         descricaoProduto,
//         precoProduto,
//         categoriaProduto,
//         quantidadeProduto
//     }
//     const id = await adicionarProduto(novoProduto);

//     resp.json({message: "Produto adicionado com sucesso!", id: id})
// })

// endpoints.get("/consultar/produto/:nome", async (req, resp) => {
//     const nome = req.params.nome;

//     const registros = await filtrarNome(nome);

//     if (registros.length === 0) {
//         return resp.status(404).send({ mensagem: "Produto não encontrado" });
//     }

//     resp.send(registros[0]);

// });


// endpoints.put("/editar/produto", async (req,resp) => {
//     const {
//         nomeProduto,
//         descricaoProduto,
//         precoProduto,
//         categoriaProduto,
//         quantidadeProduto
//     } = req.body

//     const novoProduto = {
//         nomeProduto,
//         descricaoProduto,
//         precoProduto,
//         categoriaProduto,
//         quantidadeProduto
//     }
    
//     const registros = await editarProduto(novoProduto)
//     resp.json({message: "Produto editado com sucesso!", ok: registros})
// })


// export default endpoints

