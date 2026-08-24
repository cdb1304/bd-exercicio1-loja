import bd from '../bd.js';

export default function cadastrarProduto(req, res) {
  const { nome, descricao, preco, estoque } = req.body;

  if (!nome || !descricao || !preco || !estoque) 
    return res.status(400).json({ msg_erro: 'Todos os campos são obrigatórios!' });
  
  const query = 'INSERT INTO produto (nome, descricao, preco, estoque) VALUES (?, ?, ?, ?)';

  bd.query(query, [nome, descricao, preco, estoque], (erro, resultado) => {
    if (erro) 
      return res.status(500).json({ msg_erro: erro.message });

    res.status(201).json({ id: resultado.insertId, nome, descricao, preco, estoque });
  });
}