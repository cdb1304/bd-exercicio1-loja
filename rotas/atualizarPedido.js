import bd from '../bd.js';

export default function atualizarPedido(req, res) {
  const { id } = req.params; // id_pedido

  const { data_pedido, valor_total, id_cliente } = req.body;

  if (!data_pedido || !valor_total || !id_cliente)
    return res.status(400).json({ msg_erro: 'Todos os campos são obrigatórios para atualização!' });

  const query = 'UPDATE pedido SET data_pedido = ?, valor_total = ?, id_cliente = ? WHERE id_pedido = ?';

  bd.query(query, [data_pedido, valor_total, id_cliente, id], (erro, resultado) => {
    if (erro)
      return res.status(500).json({ msg_erro: erro.message });

    if (resultado.affectedRows === 0)
      return res.status(404).json({ mensagem: 'Pedido não encontrado para atualização!' });

    res.json({ mensagem: 'Pedido atualizado!', id, data_pedido, valor_total, id_cliente });
  });
}