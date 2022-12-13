interface ICRol {
  id_rol: number | null;
  tipo_rol: string;
  valida_rol: number | string;
}

interface ICRolReq {
  id_rol: number;
  tipo_rol: string;
  valida_rol: number;
}

interface ICRolRes {
  id_rol: number;
  tipo_rol: string;
  valida_rol: number;
}

export type { ICRolReq, ICRolRes, ICRol };
