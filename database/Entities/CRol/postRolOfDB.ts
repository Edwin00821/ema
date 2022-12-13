import { pool, ResultSetHeader } from 'config/db';
import { ICRol } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const postRolOfDB = async ({ id_rol, tipo_rol, valida_rol = 1 }: ICRol) => {
  try {
    const [RowsDataCRol] = await pool.query<ResultSetHeader>(
      'INSERT INTO CRol values (?,?,?)',
      [id_rol, tipo_rol, valida_rol]
    );

    return ResultSetHeaderAdapter(RowsDataCRol);
  } catch (error) {
    return databaseError(error);
  }
};

export default postRolOfDB;
