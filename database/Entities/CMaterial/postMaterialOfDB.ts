import { pool, ResultSetHeader } from 'config/db';
import { IMMaterial } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const postMaterialOfDB = async ({
  id_mat,
  url_mat,
  id_sub,
  valida_mat = 1,
}: IMMaterial): Promise<ResultSetHeader[]> => {
  try {
    const [RowsDataCMaterial] = await pool.query<ResultSetHeader>(
      'INSERT INTO MMaterial values (?, ?, ?, ?)',
      [id_mat, url_mat, id_sub, valida_mat]
    );

    return ResultSetHeaderAdapter(RowsDataCMaterial);
  } catch (error) {
    return databaseError(error);
  }
};

export default postMaterialOfDB;
