import { InterfaceItemPedido } from '../interface/InterfaceItemPedido';

export interface PropriedadesItemPedido {
    item: InterfaceItemPedido;
    iniciarEdicao: (itemPedido: InterfaceItemPedido) => void;
    excluirItemPedido: (id: number | undefined) => void;
}