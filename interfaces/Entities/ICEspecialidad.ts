interface ICEspecialidad {
  id_es: number | null;
  nombre_es: string;
  valida_es: number | string;
}
interface ICEspReq {
  id_es: string | null;
  nombre_es: string;
  valida_es: string;
}

interface ICEspRes {
  id_es: number;
  nombre_es: string;
  valida_es: number;
}

export default ICEspecialidad;
export type { ICEspReq, ICEspRes };
