import { InterfacePedido } from '../interface/InterfacePedido';

export interface PropriedadesPedido {
    item: InterfacePedido;
    iniciarEdicao: (pedido: InterfacePedido) => void;
    excluirPedido: (id: number | undefined) => void;
}