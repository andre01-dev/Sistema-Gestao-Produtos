import { conection } from "./conection.js";

export async function adicionarUsuario(novoUsuario) {
    const comando = `
        insert into login (usuario, senha)
        values (?,?)
    `
    const [registros] = await conection.query(comando, [novoUsuario.usuario, novoUsuario.senha]);
    return registros.insertId
}

export async function autenticarUsuario(credenciais) {
    const comando = `
        select id, usuario
        from login
        where usuario = ? and senha = ?
    `
    const [registros] = await conection.query(comando, [credenciais.usuario, credenciais.senha]);
    return registros[0];
}