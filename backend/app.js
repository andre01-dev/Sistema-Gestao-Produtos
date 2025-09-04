import express from 'express';
import cors from 'cors';
import { rota } from './rotas.js';

const api = express();
api.use(express.json());
api.use(cors());

rota(api);


api.listen(5010, () => console.log("API subiu com sucesso!!!"));