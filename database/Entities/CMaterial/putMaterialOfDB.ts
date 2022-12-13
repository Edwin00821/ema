import { pool, ResultSetHeader } from 'config/db';
import { IMMaterial } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const putMaterialOfDB = async ({
  id_mat,
  url_mat,
}: IMMaterial): Promise<ResultSetHeader[]> => {
  try {
    const [RowsDataCMaterial] = await pool.query<ResultSetHeader>(
      'UPDATE MMaterial SET url_mat= ? WHERE id_mat= ?',
      [url_mat, id_mat]
    );

    return ResultSetHeaderAdapter(RowsDataCMaterial);
  } catch (error) {
    return databaseError(error);
  }
};

export default putMaterialOfDB;
