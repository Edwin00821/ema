import { pool } from 'config/db';
import { MCTema } from 'models';
import { ICTema } from 'interfaces/Entities';
import { databaseError } from 'utils';
import { TemaAdapter } from '../adapter';

const searchTemaByIdOfDB = async (id_tem: number): Promise<ICTema[]> => {
  try {
    const [RowsDataCTema] = await pool.query<MCTema[]>(
      'SELECT * FROM CTema WHERE id_tem = ?',
      [id_tem]
    );

    return await TemaAdapter(RowsDataCTema);
  } catch (error) {
    return databaseError(error);
  }
};
export default searchTemaByIdOfDB;
