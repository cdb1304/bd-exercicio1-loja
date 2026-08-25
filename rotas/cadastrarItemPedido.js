import bd from '../bd.js';

export default function cadastrarItemPedido(req, res) {
  const { quantidade, preco_unitario, id_pedido } = req.body;

  if (!quantidade || !preco_unitario || !id_pedido)
    return res.status(400).json({ msg_erro: 'Todos os campos são obrigatórios!' });
  
  const query = 'INSERT INTO item_pedido (quantidade, preco_unitario, id_pedido) VALUES (?, ?, ?)';

  bd.query(query, [quantidade, preco_unitario, id_pedido], (erro, resultado) => {
    if (erro) 
      return res.status(500).json({ msg_erro: erro.message });

    res.status(201).json({ id: resultado.insertId, quantidade, preco_unitario, id_pedido });
  });
}