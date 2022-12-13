import { pool, ResultSetHeader } from 'config/db';
import { ICEspecialidad } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const putEspecialidadOfDB = async ({
  id_es,
  nombre_es,
}: ICEspecialidad): Promise<ResultSetHeader[]> => {
  try {
    const [RowsDataCEspecialidad] = await pool.query<ResultSetHeader>(
      'UPDATE CEspecialidad SET nombre_es= ? WHERE id_es= ?',
      [nombre_es, id_es]
    );

    return ResultSetHeaderAdapter(RowsDataCEspecialidad);
  } catch (error) {
    return databaseError(error);
  }
};

export default putEspecialidadOfDB;
