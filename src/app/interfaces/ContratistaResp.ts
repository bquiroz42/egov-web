import { Contratista } from './Contratista';

export interface ContratistaResp {
    success: boolean;
    message: string;
    body: Contratista[];
}