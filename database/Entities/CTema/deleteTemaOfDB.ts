import { pool, ResultSetHeader } from 'config/db';
import { ICTema } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const deleteTema = async ({ id_tem, valida_tem }: ICTema): Promise<ResultSetHeader[]> => {
  try {

    const [RowsDataCTema] = await pool.query<ResultSetHeader>(
      'UPDATE CTema SET valida_tem= ? WHERE id_tem= ?',
      [valida_tem, id_tem]
    );

    return ResultSetHeaderAdapter(RowsDataCTema);
  } catch (error) {
    return databaseError(error);
  }
};

export default deleteTema;
