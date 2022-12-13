import { pool, ResultSetHeader } from 'config/db';
import { IDUser } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const putUserOfDB = async ({
  correo_user,
  password_user,
  id_rol,
  id_per,
}: IDUser): Promise<ResultSetHeader[]> => {
  try {
    const [RowsDataDUser] = await pool.query<ResultSetHeader>(
      'UPDATE DUser SET password_user = ?, id_rol = ?, id_per = ? WHERE correo_user = ?',
      [password_user, id_rol, id_per, correo_user]
    );

    return ResultSetHeaderAdapter(RowsDataDUser);
  } catch (error) {
    return databaseError(error);
  }
};

export default putUserOfDB;
