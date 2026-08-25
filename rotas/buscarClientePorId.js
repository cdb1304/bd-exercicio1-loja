import bd from '../bd.js';
 
export default function buscarClientePorId(req, res) {
  const { id } = req.params; // id_cliente
 
  const query = 'SELECT id_cliente, nome, email, telefone FROM cliente WHERE id_cliente = ?';
 
  bd.query(query, [id], (erro, resultado) => {
    if (erro) 
      return res.status(500).json({ msg_erro: erro.message });
 
    if (resultado.length === 0) 
      return res.status(404).json({ msg_erro: `Nenhum cliente encontrado com ID ${id}.` });
  
    return res.json(resultado[0]);
  });
}