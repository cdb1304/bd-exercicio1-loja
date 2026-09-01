import { InterfaceItemPedido } from '../interface/InterfaceItemPedido';

export interface PropriedadesFormularioItemPedido {
    idPedido: string;
    setIdPedido: (texto: string) => void;
    idProduto: string;
    setIdProduto: (texto: string) => void;
    quantidade: string;
    setQuantidade: (texto: string) => void;
    precoUnitario: string;
    setPrecoUnitario: (texto: string) => void;
    idEdicao: number | undefined;
    salvarDados: (idEdicao: number | undefined, itemPedido: InterfaceItemPedido) => void;
    limparFormulario: () => void;
}