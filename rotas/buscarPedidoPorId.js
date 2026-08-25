import bd from '../bd.js';

export default function buscarPedidoPorId(req, res) {
  const { id } = req.params;

  const query = 'SELECT id_pedido, data_pedido, valor_total, id_cliente FROM pedido WHERE id_pedido = ?';

  bd.query(query, [id], (erro, resultado) => {
    if (erro) 
      return res.status(500).json({ msg_erro: erro.message });

    if (resultado.length === 0) 
      return res.status(404).json({ msg_erro: `Nenhum pedido encontrado com ID ${id}.` });
  
    return res.json(resultado[0]);
  });
}