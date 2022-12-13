import { pool, ResultSetHeader } from 'config/db';
import { ICSubtema } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const putSubtemaOfDB = async ({ id_sub, nombre_sub }: ICSubtema) => {
  try {
    if (!id_sub || !nombre_sub) return null;

    const [RowsDataCSubtema] = await pool.query<ResultSetHeader>(
      'UPDATE CSubtema SET nombre_sub= ? WHERE id_sub= ?',
      [nombre_sub, id_sub]
    );

    return ResultSetHeaderAdapter(RowsDataCSubtema);
  } catch (error) {
    return databaseError(error);
  }
};

export default putSubtemaOfDB;
