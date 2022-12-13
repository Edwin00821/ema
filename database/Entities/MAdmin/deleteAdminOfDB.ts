import { pool, ResultSetHeader } from 'config/db';
import { IMAdmin, IMAdminReq } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

type resultAdmin = (data: IMAdminReq) => Promise<ResultSetHeader[]>;

const deleteAdminOfDB: resultAdmin = async ({ valida_adm, num_empleado }) => {
  try {
    const [RowsDataMAdmin] = await pool.query<ResultSetHeader>(
      'UPDATE MAdmin SET valida_adm= ? WHERE num_empleado= ?',
      [valida_adm, num_empleado]
    );

    return ResultSetHeaderAdapter(RowsDataMAdmin);
  } catch (error) {
    return databaseError(error);
  }
};

export default deleteAdminOfDB;
