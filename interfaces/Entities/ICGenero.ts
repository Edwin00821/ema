interface ICGenero {
  id_gen: number | null;
  tipo_gen: string;
  valida_gen: number;
}

interface ICGeneroReq {
  id_gen: number;
  tipo_gen: string;
  valida_gen: number;
}

interface ICGeneroRes {
  id_gen: number;
  tipo_gen: string;
  valida_gen: number;
}

export type { ICGenero, ICGeneroRes, ICGeneroReq };
