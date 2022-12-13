import { ICTema } from './ICTema';

interface ICSubtema {
  id_sub: number | null;
  nombre_sub: string;
  id_tem?: number | null;
  tema?: ICTema;
  valida_sub: number | string;
}

export interface ICSubReq {
  id_sub: number;
  nombre_sub: string;
  id_tem: number;
  valida_sub: number;
}

export interface ICSubRes {
  id_sub: number;
  nombre_sub: string;
  tema: ICTema;
  valida_sub: number;
}

export default ICSubtema;
