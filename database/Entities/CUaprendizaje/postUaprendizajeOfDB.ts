import { pool, ResultSetHeader } from 'config/db';
import { ICUaprendizaje } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const postUaprendizajeOfDB = async ({
  id_ua,
  nombre_ua,
  id_semesp,
  valida_ua = 1,
}: ICUaprendizaje): Promise<ResultSetHeader[]> => {
  try {
    const [RowsDataCUaprendizaje] = await pool.query<ResultSetHeader>(
      'INSERT INTO CUaprendizaje values (?, ?, ?, ?)',
      [id_ua, nombre_ua, id_semesp, valida_ua]
    );

    return ResultSetHeaderAdapter(RowsDataCUaprendizaje);
  } catch (error) {
    return databaseError(error);
  }
};

export default postUaprendizajeOfDB;
