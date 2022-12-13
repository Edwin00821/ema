import { pool } from 'config/db';
import { IMMaterial } from 'interfaces/Entities';
import { MMMaterial } from 'models';
import { databaseError } from 'utils';
import { MaterialAdapter } from './adapter';

const getMaterialOfDB = async (): Promise<IMMaterial[]> => {
  try {
    const [RowsDataMMaterial] = await pool.query<MMMaterial[]>(
      'SELECT * FROM MMaterial'
    );

    return await MaterialAdapter(RowsDataMMaterial);
  } catch (error) {
    return databaseError(error);
  }
};
export default getMaterialOfDB;
