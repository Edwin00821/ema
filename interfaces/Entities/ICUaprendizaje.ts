import IESemEsp from './IESemEsp';

interface ICUaprendizaje {
  id_ua: number | null;
  nombre_ua: string;
  id_semesp: number;
  semesp?: IESemEsp;
  valida_ua: number | string;
}
interface ICUaprendizajeReq {
  id_ua: number;
  nombre_ua: string;
  id_semesp: number;
  valida_ua: number | string;
}
interface ICUaprendizajeRes {
  id_ua: number;
  nombre_ua: string;
  semesp: IESemEsp;
  valida_ua: number | string;
}

export type { ICUaprendizaje, ICUaprendizajeReq, ICUaprendizajeRes };
