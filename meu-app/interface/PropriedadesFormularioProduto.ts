import { InterfaceProduto } from './InterfaceProduto';

export interface PropriedadesFormularioProduto {
    nome: string;
    setNome: (texto: string) => void;
    descricao: string;
    setDescricao: (texto: string) => void;
    preco: string;
    setPreco: (texto: string) => void;
    estoque: string;
    setEstoque: (texto: string) => void;
    idEdicao: number | undefined;
    salvarDados: (idEdicao: number | undefined, produto: InterfaceProduto) => void;
    limparFormulario: () => void;
}