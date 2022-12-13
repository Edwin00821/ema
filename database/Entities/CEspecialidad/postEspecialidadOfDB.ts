import { pool, ResultSetHeader } from 'config/db';
import { ICEspecialidad } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const postEspecialidadOfDB = async ({
  id_es,
  nombre_es,
  valida_es = 1,
}: ICEspecialidad): Promise<ResultSetHeader[]> => {
  try {
    const [RowsDataCEspecialidad] = await pool.query<ResultSetHeader>(
      'INSERT INTO CEspecialidad values (?, ?, ?)',
      [id_es, nombre_es, valida_es]
    );

    return ResultSetHeaderAdapter(RowsDataCEspecialidad);
  } catch (error) {
    return databaseError(error);
  }
};

export default postEspecialidadOfDB;
