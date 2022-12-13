import type { IMPersona, ICRol, IMPersonaRes } from 'interfaces/Entities';

interface IDUser {
  correo_user: string;
  password_user?: string;
  img_user?: string;
  id_rol?: number;
  rol?: ICRol;
  id_per?: number;
  persona?: IMPersona;
  valida_user: number | string;
}

interface IDUserReq {
  correo_user: string;
  password_user?: string;
  id_rol: number;
  id_per: number;
  valida_user: number;
}
interface IDUserRes {
  img_user?: string;
  correo_user: string;
  password_user?: string;
  rol: ICRol;
  persona: IMPersonaRes;
  valida_user: number;
}

interface IDUserValidar {
  correo_user: string;
  valida_user: number;
}

export type { IDUser, IDUserReq, IDUserRes, IDUserValidar };
