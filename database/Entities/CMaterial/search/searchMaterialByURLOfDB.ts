import { pool } from 'config/db';
import { IMMaterial } from 'interfaces/Entities';
import { MMMaterial } from 'models';
import { databaseError } from 'utils';
import { MaterialAdapter } from '../adapter';

const searchMaterialByURLOfDB = async (
  url_mat: string
): Promise<IMMaterial[]> => {
  try {
    const [RowsDataMMaterial] = await pool.query<MMMaterial[]>(
      'SELECT * FROM MMaterial WHERE url_mat = ?',
      [url_mat]
    );

    return await MaterialAdapter(RowsDataMMaterial);
  } catch (error) {
    return databaseError(error);
  }
};
export default searchMaterialByURLOfDB;
