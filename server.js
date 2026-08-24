import express from 'express';
import cors from 'cors';

// Importando os módulos de rotas (Atenção ao .js no final do caminho!)
import listarCliente from './rotas/listarCliente.js';
import buscarClientePorId from './rotas/buscarClientePorId.js';
import cadastrarCliente from './rotas/cadastrarCliente.js';
import atualizarCliente from './rotas/atualizarCliente.js';
import removerCliente from './rotas/removerCliente.js';

const app = express();
app.use(cors());
app.use(express.json());

// Associando cada rota ao seu respectivo endpoint e método HTTP
app.get('/clientes', listarCliente);
app.get('/clientes/:id', buscarClientePorId);
app.post('/clientes', cadastrarCliente);
app.put('/clientes/:id', atualizarCliente);
app.delete('/clientes/:id', removerCliente);

app.listen(3000, () => {
  console.log('API (CRUD) ativa na porta 3000.');
});