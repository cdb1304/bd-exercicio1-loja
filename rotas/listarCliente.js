import bd from '../bd.js';

export default function listarCliente(req, res) {
  bd.query('SELECT * FROM cliente', (erro, resultado) => {
    if (erro) 
      return res.status(500).json({ msg_erro: erro.message });
    
    res.json(resultado);
  });
}