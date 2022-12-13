import { pool, ResultSetHeader } from 'config/db';
import { IMMaterial } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const deleteMaterial = async ({
  id_mat,
  valida_mat,
}: IMMaterial): Promise<ResultSetHeader[]> => {
  try {
    const [RowsDataCMaterial] = await pool.query<ResultSetHeader>(
      'UPDATE MMaterial SET valida_mat= ? WHERE id_mat= ?',
      [valida_mat, id_mat]
    );

    return ResultSetHeaderAdapter(RowsDataCMaterial);
  } catch (error) {
    return databaseError(error);
  }
};

export default deleteMaterial;
