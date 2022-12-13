import ICParcial from './ICParcial';
import { ICUaprendizaje } from './ICUaprendizaje';

interface ICTema {
  id_tem: number | null;
  nombre_tem: string;
  id_par?: number | null;
  parcial?: ICParcial;
  id_ua?: number | null;
  unidad_aprendizaje?: ICUaprendizaje;
  valida_tem: number | string;
}

interface ICTemaReq {
  id_tem: number;
  nombre_tem: string;
  id_par: number | null;
  id_ua: number | null;
  valida_tem: number;
}

interface ICTemaRes {
  id_tem: number | null;
  nombre_tem: string;
  parcial: ICParcial;
  unidad_aprendizaje: ICUaprendizaje;
  valida_tem: number;
}

export type { ICTema, ICTemaReq, ICTemaRes };
