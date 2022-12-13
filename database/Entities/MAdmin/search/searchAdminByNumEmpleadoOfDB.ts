import { pool } from 'config/db';
import { MMAdminReq } from 'models';
import { IMAdminRes } from 'interfaces/Entities';
import { databaseError } from 'utils';
import { AdminAdapter } from '../adapter';

type getAdmin = (data: number) => Promise<IMAdminRes[]>;

const searchAdminByNumEmpleadoOfDB: getAdmin = async (num_empleado: number) => {
  try {
    const [RowsDataMAdmin] = await pool.query<MMAdminReq[]>(
      'SELECT * FROM MAdmin WHERE num_empleado = ?',
      [num_empleado]
    );

    return await AdminAdapter(RowsDataMAdmin);
  } catch (error) {
    return databaseError(error);
  }
};
export default searchAdminByNumEmpleadoOfDB;
