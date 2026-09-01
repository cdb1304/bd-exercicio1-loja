import { InterfaceProduto } from '../interface/InterfaceProduto';

export async function lerProdutos(URL_DA_API: string): Promise<InterfaceProduto[]> {
    try {
        const resposta = await fetch(URL_DA_API);
        if (!resposta.ok) {
            throw new Error(`Erro na requisição: ${resposta.status}`);
        }
        const dados: InterfaceProduto[] = await resposta.json();
        return dados;
    } catch (erro) {
        console.error('Erro ao buscar produtos no banco de dados:', erro);
        return [];
    }
}