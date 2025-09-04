import produto from './controller/produtoController.js';



export function rota(api) {
    api.use(produto);
}