import { pool, ResultSetHeader } from 'config/db';
import { ICTema } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const postTemaOfDB = async ({
  id_tem,
  nombre_tem,
  id_par,
  id_ua,
  valida_tem = 1,
}: ICTema): Promise<ResultSetHeader[]> => {
  try {
    const [RowsDataCTema] = await pool.query<ResultSetHeader>(
      'INSERT INTO CTema values (?, ?, ?, ?, ?)',
      [id_tem, nombre_tem, id_par, id_ua, valida_tem]
    );

    return ResultSetHeaderAdapter(RowsDataCTema);
  } catch (error) {
    return databaseError(error);
  }
};

export default postTemaOfDB;
