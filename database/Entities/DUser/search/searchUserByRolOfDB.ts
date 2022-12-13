import { UserAdapter } from '../adapter/user.adapter';
import { pool } from 'config/db';
import { MDUser } from 'models';
import { IDUserReq, IDUserRes } from 'interfaces/Entities';
import { databaseError } from 'utils';

const searchUserByIdOfDB = async (id_rol: number): Promise<IDUserRes[]> => {
  try {
    const [RowsDataDuser] = await pool.query<MDUser[]>(
      'SELECT * FROM DUser WHERE id_rol = ?',
      [id_rol]
    );

    return await UserAdapter(RowsDataDuser as IDUserReq[]);
  } catch (error) {
    return databaseError(error);
  }
};
export default searchUserByIdOfDB;
