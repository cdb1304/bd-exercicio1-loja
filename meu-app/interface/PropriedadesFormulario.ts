import { InterfaceCliente } from '../interface/InterfaceCliente';

export interface PropriedadesFormulario {
    nome: string;
    setNome: (texto: string) => void;
    email: string;
    setEmail: (texto: string) => void;
    telefone: string;
    setTelefone: (texto: string) => void;
    idEdicao: number | undefined;
    salvarDados: (idEdicao: number | undefined, cliente: InterfaceCliente) => void;
    limparFormulario: () => void;
}