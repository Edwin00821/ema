import { pool, ResultSetHeader } from 'config/db';
import { IDUser } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const postUserOfDB = async ({
  correo_user,
  password_user,
  id_rol,
  id_per,
  valida_user = 1,
}: IDUser): Promise<ResultSetHeader[]> => {
  try {
    const [RowsDataDUser] = await pool.query<ResultSetHeader>(
      'INSERT INTO DUser values (?, ?, ?, ?, ?)',
      [correo_user, password_user, id_rol, id_per, valida_user]
    );

    return ResultSetHeaderAdapter(RowsDataDUser);
  } catch (error) {
    return databaseError(error);
  }
};

export default postUserOfDB;
