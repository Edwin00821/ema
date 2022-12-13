import { pool } from 'config/db';
import { MCTema } from 'models';
import { ICTema } from 'interfaces/Entities';
import { TemaAdapter } from '../adapter';
import { databaseError } from 'utils';

const searchTemaByIdOfDB = async (nombre_tem: string): Promise<ICTema[]> => {
  try {
    const [RowsDataCTema] = await pool.query<MCTema[]>(
      'SELECT * FROM CTema WHERE nombre_tem = ?',
      [nombre_tem]
    );

    return await TemaAdapter(RowsDataCTema);
  } catch (error) {
    return databaseError(error);
  }
};
export default searchTemaByIdOfDB;
