import { databaseError } from 'utils';
import { pool } from 'config/db';
import { MCTema } from 'models';
import { ICTema } from 'interfaces/Entities';
import { TemaAdapter } from '../adapter';

const searchTemaByParcialAndUa = async (
  id_par: number,
  id_ua: number
): Promise<ICTema[]> => {
  try {
    const [RowsDataCTema] = await pool.query<MCTema[]>(
      'SELECT * FROM CTema WHERE id_par = ? AND id_ua = ? ',
      [id_par, id_ua]
    );

    return await TemaAdapter(RowsDataCTema);
  } catch (error) {
    return databaseError(error);
  }
};
export default searchTemaByParcialAndUa;
