import { searchUserByEmailOfDB } from 'database/Entities/DUser';

import { IMAdminReq, IMAdminRes } from 'interfaces/Entities';
import { perseBitToNumber } from 'libs';
import { databaseSuccess } from 'utils';

export const AdminAdapter = async (RowsDataMAdmin: IMAdminReq[]) => {
  return await databaseSuccess<IMAdminRes>(RowsDataMAdmin, async () => {
    return await Promise.all(
      RowsDataMAdmin.map(async (admin) => {
        const [user] = await searchUserByEmailOfDB(admin.correo_user);
        return {
          ...admin,
          user: user,
          valida_est: perseBitToNumber(admin.valida_adm),
        };
      })
    );
  });
};
