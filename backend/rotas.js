import produto from './controller/produtoController.js';
import login from './controller/loginController.js'



export function rota(api) {
    api.use(produto);
    api.use(login);
}