import express from 'express';
import cors from 'cors';

// Cliente
import listarCliente from './rotas/listarCliente.js';
import buscarClientePorId from './rotas/buscarClientePorId.js';
import cadastrarCliente from './rotas/cadastrarCliente.js';
import atualizarCliente from './rotas/atualizarCliente.js';
import removerCliente from './rotas/removerCliente.js';

// Produto
import listarProduto from './rotas/listarProduto.js';
import buscarProdutoPorId from './rotas/buscarProdutoPorId.js';
import cadastrarProduto from './rotas/cadastrarProduto.js';
import atualizarProduto from './rotas/atualizarProduto.js';
import removerProduto from './rotas/removerProduto.js';

// Pedido
import listarPedido from './rotas/listarPedido.js';
import buscarPedidoPorId from './rotas/buscarPedidoPorId.js';
import cadastrarPedido from './rotas/cadastrarPedido.js';
import atualizarPedido from './rotas/atualizarPedido.js';
import removerPedido from './rotas/removerPedido.js';

// Item do pedido
import listarItemPedido from './rotas/listarItemPedido.js';
import buscarItemPedidoPorId from './rotas/buscarItemPedidoPorID.js';
import cadastrarItemPedido from './rotas/cadastrarItemPedido.js';
import atualizarItemPedido from './rotas/atualizarItemPedido.js';
import removerItemPedido from './rotas/removerItemPedido.js';

const app = express();
const PORTA = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ---------- Cliente ----------
app.get('/clientes', listarCliente);
app.get('/clientes/:id', buscarClientePorId);
app.post('/clientes', cadastrarCliente);
app.put('/clientes/:id', atualizarCliente);
app.delete('/clientes/:id', removerCliente);

// ---------- Produto ----------
app.get('/produtos', listarProduto);
app.get('/produtos/:id', buscarProdutoPorId);
app.post('/produtos', cadastrarProduto);
app.put('/produtos/:id', atualizarProduto);
app.delete('/produtos/:id', removerProduto);

// ---------- Pedido ----------
app.get('/pedidos', listarPedido);
app.get('/pedidos/:id', buscarPedidoPorId);
app.post('/pedidos', cadastrarPedido);
app.put('/pedidos/:id', atualizarPedido);
app.delete('/pedidos/:id', removerPedido);

// ---------- Item do pedido ----------
app.get('/itens-pedido', listarItemPedido);
app.get('/itens-pedido/:id', buscarItemPedidoPorId);
app.post('/itens-pedido', cadastrarItemPedido);
app.put('/itens-pedido/:id', atualizarItemPedido);
app.delete('/itens-pedido/:id', removerItemPedido);

// Rota raiz só pra confirmar que a API está no ar
app.get('/', (req, res) => {
  res.json({ mensagem: 'API da loja rodando! Veja /clientes, /produtos, /pedidos e /itens-pedido.' });
});

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});