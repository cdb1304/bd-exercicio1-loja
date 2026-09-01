import { InterfacePedido } from '../interface/InterfacePedido';

export async function lerPedidos(URL_DA_API: string) {
    let pedidos: InterfacePedido[] = [];

    await fetch(URL_DA_API)
        .then((resposta) => resposta.json())
        .then((dados: InterfacePedido[]) => {
            pedidos = dados;
        })
        .catch((erro) => console.error('Erro ao buscar pedidos no banco de dados:', erro));

    return pedidos;
}