interface ICInteligencia {
  id_int: number | null;
  tipo_int: string;
  valida_int: number | string;
}

interface ICInt {
  id_int: number;
  tipo_int: string;
  valida_int: number;
}

export default ICInteligencia;
export type { ICInt };
