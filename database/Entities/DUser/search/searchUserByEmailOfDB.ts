import { UserAdapter } from './../adapter/user.adapter';
import { pool } from 'config/db';
import { MDUser } from 'models';
import { databaseError } from 'utils';
import { IDUserReq, IDUserRes } from 'interfaces/Entities';

const searchUserByEmailOfDB = async (
  correo_user: string
): Promise<IDUserRes[]> => {
  try {
    const [RowsDataDUser] = await pool.query<MDUser[]>(
      'SELECT * FROM DUser WHERE correo_user = ?',
      [correo_user]
    );

    return await UserAdapter(RowsDataDUser as IDUserReq[]);
  } catch (error) {
    return databaseError(error);
  }
};
export default searchUserByEmailOfDB;
