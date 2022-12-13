import { pool, ResultSetHeader } from 'config/db';
import { IDUser } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const deleteUserOfDB = async ({
  correo_user,
  valida_user,
}: IDUser): Promise<ResultSetHeader[]> => {
  try {
    const [RowsDataDUser] = await pool.query<ResultSetHeader>(
      'UPDATE DUser SET valida_user= ? WHERE correo_user= ?',
      [valida_user, correo_user]
    );

    return ResultSetHeaderAdapter(RowsDataDUser);
  } catch (error) {
    return databaseError(error);
  }
};

export default deleteUserOfDB;
