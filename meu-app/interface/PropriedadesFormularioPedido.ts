import { InterfacePedido } from '../interface/InterfacePedido';

export interface PropriedadesFormularioPedido {
    dataPedido: string;
    setDataPedido: (texto: string) => void;
    valorTotal: string;
    setValorTotal: (texto: string) => void;
    idCliente: string;
    setIdCliente: (texto: string) => void;
    idEdicao: number | undefined;
    salvarDados: (idEdicao: number | undefined, pedido: InterfacePedido) => void;
    limparFormulario: () => void;
}