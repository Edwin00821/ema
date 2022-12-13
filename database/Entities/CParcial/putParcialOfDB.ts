import { pool, ResultSetHeader } from 'config/db';
import { ICParcial } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const putParcialOfDB = async ({
  id_par,
  nombre_par,
}: ICParcial): Promise<ResultSetHeader[]> => {
  try {
    const [RowsDataCParcial] = await pool.query<ResultSetHeader>(
      'UPDATE CParcial SET nombre_par= ? WHERE id_par= ?',
      [nombre_par, id_par]
    );

    return ResultSetHeaderAdapter(RowsDataCParcial);
  } catch (error) {
    return databaseError(error);
  }
};

export default putParcialOfDB;
