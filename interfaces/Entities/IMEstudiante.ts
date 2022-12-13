import { ICEspecialidad, ICSemestre } from 'interfaces/Entities';
import { IDUser, IDUserRes } from './IDUser';

interface IMEstudiante {
  isLogued?: boolean;
  boleta_est: string | null;
  correo_user?: string | null;
  user?: IDUser;
  id_es?: number | null;
  especialidad?: ICEspecialidad;
  id_sem?: number | null;
  semestre?: ICSemestre;
  valida_est: number | string;
}
interface IMEstudianteReq {
  boleta_est: string;
  correo_user: string;
  id_es: number;
  id_sem: number;
  valida_est: number | string;
}
interface IMEstudianteRes {
  isLogued?: boolean;
  boleta_est: string | null;
  user: IDUserRes;
  especialidad: ICEspecialidad;
  semestre: ICSemestre;
  valida_est: number | string;
}

export type { IMEstudiante, IMEstudianteReq, IMEstudianteRes };
