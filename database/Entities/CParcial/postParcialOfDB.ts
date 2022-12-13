import { pool, ResultSetHeader } from 'config/db';
import { ICParcial } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const postParcialOfDB = async ({
  id_par,
  nombre_par,
  valida_par = 1,
}: ICParcial): Promise<ResultSetHeader[]> => {
  try {
    const [RowsDataCParcial] = await pool.query<ResultSetHeader>(
      'INSERT INTO CParcial values (?, ?, ?)',
      [id_par, nombre_par, valida_par]
    );

    return ResultSetHeaderAdapter(RowsDataCParcial);
  } catch (error) {
    return databaseError(error);
  }
};

export default postParcialOfDB;
