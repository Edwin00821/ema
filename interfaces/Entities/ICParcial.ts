interface ICParcial {
  id_par: number | null;
  nombre_par: string;
  valida_par: number | string;
}

interface ICPar {
  id_par: number;
  nombre_par: string;
  valida_par: number;
}

export default ICParcial;
export type { ICPar };
