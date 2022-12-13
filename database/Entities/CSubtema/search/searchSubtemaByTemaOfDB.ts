import { pool } from 'config/db';
import { MCSubtema } from 'models';
import { SubtemaAdapter } from '../adapter';
import { databaseError } from 'utils';

const searchSubtemaByTemaOfDB = async (id_tem: number) => {
  try {
    const [RowsDataCSubtema] = await pool.query<MCSubtema[]>(
      'SELECT * FROM CSubtema WHERE id_tem = ?',
      [id_tem]
    );

    return await SubtemaAdapter(RowsDataCSubtema);
  } catch (error) {
    return databaseError(error);
  }
};
export default searchSubtemaByTemaOfDB;
