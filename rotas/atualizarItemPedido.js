import bd from '../bd.js';

export default function atualizarItemPedido(req, res) {
  const { id } = req.params; // id_item_pedido

  const { quantidade, preco_unitario, id_pedido } = req.body;

  if (!quantidade || !preco_unitario || !id_pedido)
    return res.status(400).json({ msg_erro: 'Todos os campos são obrigatórios para atualização!' });

  const query = 'UPDATE item_pedido SET quantidade = ?, preco_unitario = ?, id_pedido = ? WHERE id_item_pedido = ?';

  bd.query(query, [quantidade, preco_unitario, id_pedido, id], (erro, resultado) => {
    if (erro)
      return res.status(500).json({ msg_erro: erro.message });

    if (resultado.affectedRows === 0)
      return res.status(404).json({ mensagem: 'Item do pedido não encontrado para atualização!' });

    res.json({ mensagem: 'Item do pedido atualizado!', id, quantidade, preco_unitario, id_pedido });
  });
}