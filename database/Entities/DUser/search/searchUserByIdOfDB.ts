import { UserAdapter } from './../adapter/user.adapter';
import { pool } from 'config/db';
import { MDUser } from 'models';
import { databaseError } from 'utils';
import { IDUserReq, IDUserRes } from 'interfaces/Entities';

const searchUserByIdOfDB = async (id_user: number): Promise<IDUserRes[]> => {
  try {
    const [RowsDataDuser] = await pool.query<MDUser[]>(
      'SELECT * FROM DUser WHERE id_user = ?',
      [id_user]
    );

    return await UserAdapter(RowsDataDuser as IDUserReq[]);
  } catch (error) {
    return databaseError(error);
  }
};
export default searchUserByIdOfDB;
