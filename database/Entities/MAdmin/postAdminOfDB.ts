import { pool, ResultSetHeader } from 'config/db';
import { IMAdminReq } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

type resultAdmin = (data: IMAdminReq) => Promise<ResultSetHeader[]>;

const postAdminOfDB: resultAdmin = async ({
  num_empleado,
  correo_user,
  valida_adm = 1,
}) => {
  try {
    const [RowsDataMAdmin] = await pool.query<ResultSetHeader>(
      'INSERT INTO MAdmin values (?, ?, ?)',
      [num_empleado, correo_user, valida_adm]
    );

    return ResultSetHeaderAdapter(RowsDataMAdmin);
  } catch (error) {
    return databaseError(error);
  }
};

export default postAdminOfDB;
