import { pool, ResultSetHeader } from 'config/db';
import { ICInteligencia } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const postInteligencia = async ({
  id_int,
  tipo_int,
  valida_int = 1,
}: ICInteligencia): Promise<ResultSetHeader[]> => {
  try {
    const [RowsDataCInteligencia] = await pool.query<ResultSetHeader>(
      'INSERT INTO CInteligencia values (?, ?, ?)',
      [id_int, tipo_int, valida_int]
    );

    return ResultSetHeaderAdapter(RowsDataCInteligencia);
  } catch (error) {
    return databaseError(error);
  }
};

export default postInteligencia;
