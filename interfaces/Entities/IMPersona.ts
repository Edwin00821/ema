import type { ICGenero, ICInteligencia } from 'interfaces/Entities';

interface IMPersona {
  id_per: number | null;
  nombre_per: string;
  appat_per: string;
  apmat_per: string;
  fecha_de_nacimiento_per: Date | string;
  id_gen?: number | null;
  genero?: ICGenero;
  id_int?: number | null;
  inteligencia?: ICInteligencia;
  valida_per: number | string;
}

interface IMPer {
  id_per: number;
  nombre_per: string;
  appat_per: string;
  apmat_per: string;
  fecha_de_nacimiento_per: string | Date;
}

interface IMPersonaReq extends IMPer {
  id_gen: number;
  id_int: number;
  valida_per: number | string;
}

interface IMPersonaRes extends IMPer {
  genero: ICGenero;
  inteligencia: ICInteligencia;
  valida_per: number;
}

export type { IMPersona, IMPer, IMPersonaRes, IMPersonaReq };
