import { pool, ResultSetHeader } from 'config/db';
import { ICSubtema } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const deleteSubtemaOfDB = async ({ id_sub, valida_sub }: ICSubtema) => {
  try {
    if (!id_sub || valida_sub === null) return null;

    const [RowsDataCSubtema] = await pool.query<ResultSetHeader>(
      'UPDATE CSubtema SET valida_sub= ? WHERE id_sub= ?',
      [valida_sub, id_sub]
    );

    return ResultSetHeaderAdapter(RowsDataCSubtema);
  } catch (error) {
    return databaseError(error);
  }
};

export default deleteSubtemaOfDB;
