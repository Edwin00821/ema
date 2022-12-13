import { pool, ResultSetHeader } from 'config/db';
import { ICRol } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const deleteRolOfDB = async ({
  id_rol,
  valida_rol,
}: ICRol): Promise<ResultSetHeader[]> => {
  try {
    const [RowsDataCRol] = await pool.query<ResultSetHeader>(
      'UPDATE CRol SET valida_rol= ? WHERE id_rol= ?',
      [valida_rol, id_rol]
    );

    return ResultSetHeaderAdapter(RowsDataCRol);
  } catch (error) {
    return databaseError(error);
  }
};

export default deleteRolOfDB;
