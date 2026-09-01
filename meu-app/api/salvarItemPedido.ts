import { Alert } from 'react-native';
import { InterfaceItemPedido } from '../interface/InterfaceItemPedido';

export async function salvarItemPedido(
   idEdicao: number | undefined,
   itemPedido: InterfaceItemPedido,
   URL_DA_API: string
) {
   const { id_pedido, id_produto, quantidade, preco_unitario } = itemPedido;

   if (!id_pedido || !id_produto || !quantidade || !preco_unitario) {
      Alert.alert('Erro', 'Por favor, realize o preenchimento de todos os campos!');
      return;
   }

   const dadosItemPedido = {
      id_pedido,
      id_produto,
      quantidade,
      preco_unitario
   };

   const urlFinal = idEdicao === undefined
      ? URL_DA_API
      : `${URL_DA_API}/${idEdicao}`;
   const metodoHttp = idEdicao === undefined ? 'POST' : 'PUT';

   await fetch(urlFinal, {
      method: metodoHttp,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dadosItemPedido)
   })
      .then((resposta) => resposta.json())
      .then(() => {
         Alert.alert(
            'Sucesso!',
            idEdicao === undefined
               ? 'Item do pedido cadastrado no MySQL!'
               : 'Item do pedido atualizado no MySQL!'
         );
      })
      .catch((erro) => console.error('Erro ao processar requisição no servidor:', erro));
}