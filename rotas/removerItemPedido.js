import bd from '../bd.js';

export default function removerItemPedido(req, res) {
  const { id } = req.params;

  const query = 'DELETE FROM item_pedido WHERE id_item_pedido = ?';

  bd.query(query, [id], (erro, resultado) => {
    if (erro) 
      return res.status(500).json({ msg_erro: erro.message });

    if (resultado.affectedRows === 0) 
      return res.status(404).json({ mensagem: 'Item do pedido não encontrado!' });

    res.json({ mensagem: 'Item do pedido removido com sucesso!' });
  });
}