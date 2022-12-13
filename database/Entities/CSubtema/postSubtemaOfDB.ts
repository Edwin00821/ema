import { pool, ResultSetHeader } from 'config/db';
import { ICSubtema } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const postSubtemaOfDBfDB = async ({
  id_sub,
  nombre_sub,
  id_tem,
  valida_sub = 1,
}: ICSubtema) => {
  try {
    const [RowsDataCSubtema] = await pool.query<ResultSetHeader>(
      'INSERT INTO CSubtema values (?,?,?,?)',
      [id_sub, nombre_sub, id_tem, valida_sub]
    );

    return ResultSetHeaderAdapter(RowsDataCSubtema);
  } catch (error) {
    return databaseError(error);
  }
};

export default postSubtemaOfDBfDB;
