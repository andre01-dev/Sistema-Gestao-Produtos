import { Router } from "express";
import { adicionarUsuario, autenticarUsuario } from "../repository/loginRepository.js";

const endpoints = Router();

endpoints.post("/login/cadastrar", async (req, resp) => {
    try {
        const id = await adicionarUsuario(req.body);
        resp.status(201).send({ id });
    } catch (err) {
        resp.status(500).send({ erro: err.message });
    }
})

endpoints.post("/login", async (req, resp) => {
    try {
        const credenciais = req.body;
        const user = await autenticarUsuario(credenciais);

        if (user) {
            resp.send({ logado: true, user });
        } else {
            resp.status(401).send({ logado: false, mensagem: "Usuário ou senha incorretos" });
        }
    } catch (err) {
        resp.status(500).send({ erro: err.message });
    }
})

export default endpoints