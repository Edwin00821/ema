import {
  ICEspecialidad,
  ICGenero,
  ICInteligencia,
  ICParcial,
  ICRol,
  ICSemestre,
  ICSubtema,
  ICTema,
  ICUaprendizaje,
  IDUser,
  IDUserRes,
  IESemEsp,
  IMAdmin,
  IMAdminRes,
  IMEstudiante,
  IMEstudianteRes,
  IMMaterial,
  IMPersona,
  IMPersonaRes,
} from 'interfaces/Entities';

export type DBTables =
  | ICEspecialidad
  | ICGenero
  | ICInteligencia
  | ICParcial
  | ICRol
  | ICSemestre
  | ICSubtema
  | ICTema
  | ICUaprendizaje
  | IDUser
  | IESemEsp
  | IMAdmin
  | IMEstudiante
  | IMMaterial
  | IMPersona;

export interface selectData {
  name: string;
  value: number | null;
}

export interface Navs {
  name: string;
  href: string;
  active: boolean;
}

export interface UserT {
  name?: string;
  email?: string;
  image?: string;
  data?: IMEstudianteRes | IMAdminRes;
  isNewUser?: boolean;
}

export type AuthStudent = IRegisterStudent extends IPersonalData
  ? IRegisterStudent
  : never;

export interface Message {
  messsage: string;
}

export interface Response {
  message?: string;
}

export interface ResponseAuthStudent extends Response {
  data?: ICRol[];
}

export interface ResponsePersona extends Response {
  data?: IMPersonaRes[];
}
export interface ResponseEstudiante extends Response {
  data?: IMEstudianteRes[];
}
export interface ResponseAdmin extends Response {
  data?: IMAdminRes[];
}
export interface ResponseMaterial extends Response {
  data?: IMMaterial[];
}
export interface ResponseUser extends Response {
  data?: IDUserRes[];
}
export interface ResponseRol extends Response {
  data?: ICRol[];
}
export interface ResponseGenero extends Response {
  data?: ICGenero[];
}
export interface ResponseInteligencia extends Response {
  data?: ICInteligencia[];
}
export interface ResponseUaprendizaje extends Response {
  data?: ICUaprendizaje[];
}
export interface ResponseParcial extends Response {
  data?: ICParcial[];
}
export interface ResponseSemestre extends Response {
  data?: ICSemestre[];
}
export interface ResponseEspecialidad extends Response {
  data?: ICEspecialidad[];
}
export interface ResponseSemEsp extends Response {
  data?: IESemEsp[];
}
export interface ResponseTema extends Response {
  data?: ICTema[];
}
export interface ResponseSubtema extends Response {
  data?: ICSubtema[];
}

export interface AxiosResponsePPD extends Response {
  data?: T;
}
