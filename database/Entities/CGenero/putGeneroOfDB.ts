import { pool, ResultSetHeader } from 'config/db';
import { ICGenero } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const putGeneroOfDB = async ({
  id_gen,
  tipo_gen,
}: ICGenero): Promise<ResultSetHeader[]> => {
  try {
    const [RowsDataCGenero] = await pool.query<ResultSetHeader>(
      'UPDATE CGenero SET tipo_gen = ? WHERE id_gen = ?',
      [tipo_gen, id_gen]
    );

    const DataGenero = ResultSetHeaderAdapter(RowsDataCGenero);

    return DataGenero;
  } catch (error) {
    return databaseError(error);
  }
};

export default putGeneroOfDB;
