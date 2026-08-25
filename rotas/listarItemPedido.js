import bd from '../bd.js';

export default function listarItemPedido(req, res) {
  bd.query('SELECT * FROM item_pedido', (erro, resultado) => {
    if (erro) 
      return res.status(500).json({ msg_erro: erro.message });
    
    res.json(resultado);
  });
}