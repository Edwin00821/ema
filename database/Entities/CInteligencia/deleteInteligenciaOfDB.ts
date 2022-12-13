import { pool, ResultSetHeader } from 'config/db';
import { ICInteligencia } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const deleteInteligencia = async ({
  id_int,
  valida_int,
}: ICInteligencia): Promise<ResultSetHeader[]> => {
  try {
    const [RowsDataCInteligencia] = await pool.query<ResultSetHeader>(
      'UPDATE CInteligencia SET valida_int = ? WHERE id_int = ?',
      [valida_int, id_int]
    );

    return ResultSetHeaderAdapter(RowsDataCInteligencia);
  } catch (error) {
    return databaseError(error);
  }
};

export default deleteInteligencia;
