import { pool, ResultSetHeader } from 'config/db';
import { ICTema } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const putTemaOfDB = async ({ id_tem, nombre_tem }: ICTema): Promise<ResultSetHeader[]> => {
  try {
    const [RowsDataCTema] = await pool.query<ResultSetHeader>(
      'UPDATE CTema SET nombre_tem= ? WHERE id_tem= ?',
      [nombre_tem, id_tem]
    );

    return ResultSetHeaderAdapter(RowsDataCTema);
  } catch (error) {
    return databaseError(error);
  }
};

export default putTemaOfDB;
