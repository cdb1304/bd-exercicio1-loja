import { InterfaceCliente } from '../interface/InterfaceCliente';

export interface PropriedadesCliente {
    item: InterfaceCliente;
    iniciarEdicao: (cliente: InterfaceCliente) => void;
    excluirCliente: (id: number | undefined) => void;
}