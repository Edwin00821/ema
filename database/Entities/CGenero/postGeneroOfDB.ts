import { pool, ResultSetHeader } from 'config/db';
import { ICGenero } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const postGeneroOfDB = async ({
  id_gen,
  tipo_gen,
  valida_gen = 1,
}: ICGenero): Promise<ResultSetHeader[]> => {
  try {
    const [RowsDataCGenero] = await pool.query<ResultSetHeader>(
      'INSERT INTO CGenero values (?, ?, ?)',
      [id_gen, tipo_gen, valida_gen]
    );

    const DataGenero = ResultSetHeaderAdapter(RowsDataCGenero);

    return DataGenero;
  } catch (error) {
    return databaseError(error);
  }
};

export default postGeneroOfDB;
