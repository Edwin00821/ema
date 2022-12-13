export default interface IProfile {
  id_per: number;
  nombre_per: string;
  appat_per: string;
  apmat_per: string;
  fecha_de_nacimiento_per: Date | string;
  correo_user: string;
  id_sem: number;
  id_es: number;
  boleta_est?: string;

  id_rol: number;
  id_int: number;
  id_gen: number;
  valida_per: number;
}
