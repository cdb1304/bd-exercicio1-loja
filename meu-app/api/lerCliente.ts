import { InterfaceCliente } from '../interface/InterfaceCliente';

export async function lerClientes(URL_DA_API: string) {
    let clientes: InterfaceCliente[] = [];

    await fetch(URL_DA_API)
        .then((resposta) => resposta.json())
        .then((dados: InterfaceCliente[]) => {
            clientes = dados;
        })
        .catch((erro) => console.error('Erro ao buscar clientes no banco de dados:', erro));

    return clientes;
}