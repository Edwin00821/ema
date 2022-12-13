import { perseBitToNumber } from 'libs';
import { searchRolByIdOfDB } from 'database/Entities/CRol';
import { IDUserReq, IDUserRes } from 'interfaces/Entities';
import { searchPersonaByIdOfDB } from 'database/Entities/MPersona';
import { databaseSuccess } from 'utils';

type userAdap = (RowsDataIDUser: IDUserReq[]) => Promise<IDUserRes[]>;

export const UserAdapter: userAdap = async (RowsDataIDUser) => {
  return await databaseSuccess<IDUserRes>(RowsDataIDUser, async () => {
    return await Promise.all(
      RowsDataIDUser.map(async (user) => {
        const [rol] = await searchRolByIdOfDB(user.id_rol);
        const [persona] = await searchPersonaByIdOfDB(user.id_per);
        return {
          correo_user: user.correo_user,
          password_user: user.password_user,
          rol: rol,
          persona: persona,
          valida_user: perseBitToNumber(user.valida_user),
        };
      })
    );
  });
};
