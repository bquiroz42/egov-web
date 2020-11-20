import { Contrato } from './Contrato';

export interface ContratosResp {
    success: boolean;
    message: string;
    contrato: Contrato[];
}