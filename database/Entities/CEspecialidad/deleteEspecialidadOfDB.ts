import { pool, ResultSetHeader } from 'config/db';
import { ICEspecialidad } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const deleteEspecialidadOfDB = async ({
  id_es,
  valida_es,
}: ICEspecialidad): Promise<ResultSetHeader[]> => {
  try {
    const [RowsDataCEspecialidad] = await pool.query<ResultSetHeader>(
      'UPDATE CEspecialidad SET valida_es= ? WHERE id_es= ?',
      [valida_es, id_es]
    );

    return ResultSetHeaderAdapter(RowsDataCEspecialidad);
  } catch (error) {
    return databaseError(error);
  }
};

export default deleteEspecialidadOfDB;
