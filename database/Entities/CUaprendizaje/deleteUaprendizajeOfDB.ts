import { pool, ResultSetHeader } from 'config/db';
import { ICUaprendizaje } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const deleteUaprendizajeOfDB = async ({ id_ua, valida_ua }: ICUaprendizaje): Promise<ResultSetHeader[]> => {
  try {

    const [RowsDataCUaprendizaje] = await pool.query<ResultSetHeader>(
      'UPDATE CUAprendizaje SET valida_ua= ? WHERE id_ua= ?',
      [valida_ua, id_ua]
    );

    return ResultSetHeaderAdapter(RowsDataCUaprendizaje);
  } catch (error) {
    return databaseError(error);
  }
};

export default deleteUaprendizajeOfDB;
