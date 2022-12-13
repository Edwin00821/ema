import { pool } from 'config/db';
import { MCEspecialidad } from 'models';
import { ICEspecialidad } from 'interfaces/Entities';
import { databaseError } from 'utils';
import { EspecialidadAdapter } from '../adapter';

const searchEspecialidadByNombreOfDB = async (
  name: string
): Promise<ICEspecialidad[]> => {
  try {
    const [RowsDataCEspecialidad] = await pool.query<MCEspecialidad[]>(
      'SELECT * FROM CEspecialidad WHERE nombre_es = ?',
      [name]
    );

    return await EspecialidadAdapter(RowsDataCEspecialidad);
  } catch (error) {

    return databaseError(error);
  }
};
export default searchEspecialidadByNombreOfDB;
