import { pool, ResultSetHeader } from 'config/db';
import { IMAdminReq } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

type resultAdmin = (data: IMAdminReq) => Promise<ResultSetHeader[]>;

const putAdminOfDB: resultAdmin = async ({ num_empleado, correo_user }) => {
  try {
    const [RowsDataMAdmin] = await pool.query<ResultSetHeader>(
      'UPDATE MAdmin SET num_empleado= ? WHERE correo_user= ?',
      [num_empleado, correo_user]
    );

    return ResultSetHeaderAdapter(RowsDataMAdmin);
  } catch (error) {
    return databaseError(error);
  }
};

export default putAdminOfDB;
