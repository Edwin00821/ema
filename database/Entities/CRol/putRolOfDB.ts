import { pool, ResultSetHeader } from 'config/db';
import { ICRol } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const putRolOfDB = async ({ id_rol, tipo_rol }: ICRol) => {
  try {
    if (!id_rol || !tipo_rol) return null;

    const [RowsDataCRol] = await pool.query<ResultSetHeader>(
      'UPDATE CRol SET tipo_rol= ? WHERE id_rol= ?',
      [tipo_rol, id_rol]
    );

    return ResultSetHeaderAdapter(RowsDataCRol);
  } catch (error) {
    return databaseError(error);
  }
};

export default putRolOfDB;
