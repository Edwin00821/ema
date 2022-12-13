import { pool, ResultSetHeader } from 'config/db';
import { ICUaprendizaje } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const putUaprendizajeOfDB = async ({ id_ua, nombre_ua }: ICUaprendizaje): Promise<ResultSetHeader[]> => {
  try {

    const [RowsDataCUaprendizaje] = await pool.query<ResultSetHeader>(
      'UPDATE CUAprendizaje SET nombre_ua = ? WHERE id_ua = ?',
      [nombre_ua, id_ua]
    );

    return  ResultSetHeaderAdapter(RowsDataCUaprendizaje);
  } catch (error) {
    return databaseError(error);
  }
};

export default putUaprendizajeOfDB;
