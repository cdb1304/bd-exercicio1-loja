import bd from '../bd.js';

export default function cadastrarPedido(req, res) {
  const { data_pedido, valor_total, id_cliente } = req.body;

  if (!data_pedido || !valor_total || !id_cliente)
    return res.status(400).json({ msg_erro: 'Todos os campos são obrigatórios!' });
  
  const query = 'INSERT INTO pedido (data_pedido, valor_total, id_cliente) VALUES (?, ?, ?)';

  bd.query(query, [data_pedido, valor_total, id_cliente], (erro, resultado) => {
    if (erro) 
      return res.status(500).json({ msg_erro: erro.message });

    res.status(201).json({ id: resultado.insertId, data_pedido, valor_total, id_cliente });
  });
}