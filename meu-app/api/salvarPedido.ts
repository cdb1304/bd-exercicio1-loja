import { Alert } from 'react-native';
import { InterfacePedido } from '../interface/InterfacePedido';

export async function salvarPedido(
   idEdicao: number | undefined,
   pedido: InterfacePedido,
   URL_DA_API: string
) {
   const { data_pedido, valor_total, id_cliente } = pedido;

   if (!data_pedido || !id_cliente) {
      Alert.alert('Erro', 'Por favor, realize o preenchimento de todos os campos!');
      return;
   }

   const dadosPedido = {
      data_pedido,
      valor_total,
      id_cliente
   };

   const urlFinal = idEdicao === undefined
      ? URL_DA_API
      : `${URL_DA_API}/${idEdicao}`;
   const metodoHttp = idEdicao === undefined ? 'POST' : 'PUT';

   await fetch(urlFinal, {
      method: metodoHttp,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dadosPedido)
   })
      .then((resposta) => resposta.json())
      .then(() => {
         Alert.alert(
            'Sucesso!',
            idEdicao === undefined
               ? 'Pedido cadastrado no MySQL!'
               : 'Pedido atualizado no MySQL!'
         );
      })
      .catch((erro) => console.error('Erro ao processar requisição no servidor:', erro));
}