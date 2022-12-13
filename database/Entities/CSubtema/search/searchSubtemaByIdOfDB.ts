import { pool } from 'config/db';
import { MCSubtema } from 'models';
import { SubtemaAdapter } from '../adapter';
import { databaseError } from 'utils';

const searchSubtemaByIdOfDB = async (id_sub: number) => {
  try {
    const [RowsDataCSubtema] = await pool.query<MCSubtema[]>(
      'SELECT * FROM CSubtema WHERE id_sub = ?',
      [id_sub]
    );

    return await SubtemaAdapter(RowsDataCSubtema);
  } catch (error) {
    return databaseError(error);
  }
};
export default searchSubtemaByIdOfDB;
