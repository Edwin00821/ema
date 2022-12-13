import { pool } from 'config/db';
import { IMMaterial } from 'interfaces/Entities';
import { MMMaterial } from 'models';
import { databaseError } from 'utils';
import { MaterialAdapter } from '../adapter';

const searchMaterialByIdOfDB = async (
  id_mat: number
): Promise<IMMaterial[]> => {
  try {
    const [RowsDataMMaterial] = await pool.query<MMMaterial[]>(
      'SELECT * FROM MMaterial WHERE id_mat = ?',
      [id_mat]
    );

    return await MaterialAdapter(RowsDataMMaterial);
  } catch (error) {
    return databaseError(error);
  }
};
export default searchMaterialByIdOfDB;
