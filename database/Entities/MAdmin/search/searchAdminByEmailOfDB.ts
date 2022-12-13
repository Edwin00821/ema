import { pool } from 'config/db';
import { MMAdminReq } from 'models';
import { IMAdminRes } from 'interfaces/Entities';
import { AdminAdapter } from '../adapter';
import { databaseError } from 'utils';

type getAdmin = (data: string) => Promise<IMAdminRes[]>;

const searchAdminByEmailOfDB: getAdmin = async (correo_user: string) => {
  try {
    const [RowsDataMAdmin] = await pool.query<MMAdminReq[]>(
      'SELECT * FROM MAdmin WHERE correo_user = ?',
      [correo_user]
    );

    return await AdminAdapter(RowsDataMAdmin);
  } catch (error) {
    return databaseError(error);
  }
};
export default searchAdminByEmailOfDB;
