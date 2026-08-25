import bd from '../bd.js';

export default function buscarItemPedidoPorId(req, res) {
  const { id } = req.params;

  const query = 'SELECT * FROM item_pedido WHERE id_item_pedido = ?';

  bd.query(query, [id], (erro, resultado) => {
    if (erro) 
      return res.status(500).json({ msg_erro: erro.message });

    if (resultado.length === 0) 
      return res.status(404).json({ msg_erro: `Nenhum item de pedido encontrado com ID ${id}.` });
  
    return res.json(resultado[0]);
  });
}