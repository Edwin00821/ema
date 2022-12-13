import { pool } from 'config/db';
import { MCSubtema } from 'models';
import { SubtemaAdapter } from './adapter';
import { databaseError } from 'utils';

const getAllSubtemasOfDB = async () => {
  try {
    const [RowsDataCSubtema] = await pool.query<MCSubtema[]>(
      'SELECT * FROM CSubtema'
    );

    return await SubtemaAdapter(RowsDataCSubtema);
  } catch (error) {
    return databaseError(error);
  }
};
export default getAllSubtemasOfDB;
