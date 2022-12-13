import { pool, ResultSetHeader } from 'config/db';
import { ICParcial } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const deleteParcial = async ({
  id_par,
  valida_par,
}: ICParcial): Promise<ResultSetHeader[]> => {
  try {
    const [RowsDataCParcial] = await pool.query<ResultSetHeader>(
      'UPDATE CParcial SET valida_par= ? WHERE id_par= ?',
      [valida_par, id_par]
    );

    return ResultSetHeaderAdapter(RowsDataCParcial);
  } catch (error) {
    return databaseError(error);
  }
};

export default deleteParcial;
