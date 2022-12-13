import { pool, ResultSetHeader } from 'config/db';
import { ICGenero } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const deleteGeneroOfDB = async ({ id_gen, valida_gen }: ICGenero): Promise<ResultSetHeader[]> => {
  try {

    const [RowsDataCGenero] = await pool.query<ResultSetHeader>(
      'UPDATE CGenero SET valida_gen= ? WHERE id_gen= ?',
      [valida_gen, id_gen]
    );

    const DataGenero = ResultSetHeaderAdapter(RowsDataCGenero);

    return DataGenero;
  } catch (error) {
    return databaseError(error);
  }
};

export default deleteGeneroOfDB;
