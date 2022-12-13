import { pool } from 'config/db';
import { MCEspecialidad } from 'models';
import { ICEspecialidad } from 'interfaces/Entities';
import { databaseError } from 'utils';
import { EspecialidadAdapter } from '../adapter';

const searchEspecialidadByIdOfDB = async (
  id_es: number
): Promise<ICEspecialidad[]> => {
  try {
    const [RowsDataCEspecialidad] = await pool.query<MCEspecialidad[]>(
      'SELECT * FROM CEspecialidad WHERE id_es = ?',
      [id_es]
    );

    return await EspecialidadAdapter(RowsDataCEspecialidad);
  } catch (error) {
    return databaseError(error);
  }
};
export default searchEspecialidadByIdOfDB;
