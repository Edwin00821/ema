import { pool } from 'config/db';
import { MDUser } from 'models';
import { UserAdapter } from './adapter';
import { databaseError } from 'utils';
import { IDUserReq, IDUserRes } from 'interfaces/Entities';

type getAllUsers = () => Promise<IDUserRes[]>;

const getAllUsersOfDB: getAllUsers = async () => {
  try {
    const [RowsDataDUser] = await pool.query<MDUser[]>('SELECT * FROM DUser');

    return await UserAdapter(RowsDataDUser as IDUserReq[]);
  } catch (error) {
    return databaseError(error);
  }
};
export default getAllUsersOfDB;
