import { pool } from 'config/db';
import { MMAdminReq } from 'models';
import { IMAdminRes } from 'interfaces/Entities';
import { databaseError } from 'utils';
import { AdminAdapter } from './adapter';

type getAdmins = () => Promise<IMAdminRes[]>;
const getAllAdminsOfDB: getAdmins = async () => {
  try {
    const [RowsDataMAdmin] = await pool.query<MMAdminReq[]>(
      'SELECT * FROM MAdmin'
    );

    return await AdminAdapter(RowsDataMAdmin);
  } catch (error) {
    return databaseError(error);
  }
};
export default getAllAdminsOfDB;
