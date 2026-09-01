import { InterfaceItemPedido } from '../interface/InterfaceItemPedido';

export async function lerItensPedido(URL_DA_API: string) {
    let itensPedido: InterfaceItemPedido[] = [];

    await fetch(URL_DA_API)
        .then((resposta) => resposta.json())
        .then((dados: InterfaceItemPedido[]) => {
            itensPedido = dados;
        })
        .catch((erro) => console.error('Erro ao buscar itens do pedido no banco de dados:', erro));

    return itensPedido;
}