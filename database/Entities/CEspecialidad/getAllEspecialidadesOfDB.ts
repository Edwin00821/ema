import { ICEspecialidad } from 'interfaces/Entities';
import { EspecialidadAdapter } from './adapter';
import { query } from 'config/db';
import { DB_ESPECIALIDAD } from 'libs/consts';

const getAllEspecialidadesOfDB = async (): Promise<ICEspecialidad[]> => {
  return await query<ICEspecialidad>(
    DB_ESPECIALIDAD.select,
    EspecialidadAdapter
  );
};
export default getAllEspecialidadesOfDB;
