import type { IDUser } from 'interfaces/Entities';

interface IMAdmin {
  isLogued?: boolean;
  num_empleado: string;
  user?: IDUser;
  valida_adm: number | string;
}

interface IMAdminReq {
  num_empleado: string | null;
  correo_user: string ;
  user: IDUser;
  valida_adm: number | string;
}

interface IMAdminRes {
  isLogued?: boolean;
  num_empleado: string | null;
  user: IDUser;
  valida_adm: number | string;
}

export type { IMAdmin, IMAdminReq, IMAdminRes};