import { pool } from 'config/db';
import { MCSubtema } from 'models';
import { SubtemaAdapter } from '../adapter';
import { databaseError } from 'utils';

const searchSubtemaByNombreOfDB = async (nombre_sub: string) => {
  try {
    const [RowsDataCSubtema] = await pool.query<MCSubtema[]>(
      'SELECT * FROM CSubtema WHERE nombre_sub = ?',
      [nombre_sub]
    );

    return await SubtemaAdapter(RowsDataCSubtema);
  } catch (error) {
    return databaseError(error);
  }
};
export default searchSubtemaByNombreOfDB;
