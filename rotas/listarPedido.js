import bd from '../bd.js';

export default function listarPedido(req, res) {
  bd.query('SELECT * FROM pedido', (erro, resultado) => {
    if (erro) 
      return res.status(500).json({ msg_erro: erro.message });
    
    res.json(resultado);
  });
}