import { pool } from 'config/db';
import { MESemEsp } from 'models';
import { IESemEsp } from 'interfaces/Entities';
import { SemEspAdapter } from '../adapter';
import { databaseError } from 'utils';

const searchSemEspByEspOfDB = async (id_es: number): Promise<IESemEsp[]> => {
  try {
    const [RowsDataESemEsp] = await pool.query<MESemEsp[]>(
      'SELECT * FROM ESemEsp WHERE id_es = ?',
      [id_es]
    );

    return await SemEspAdapter(RowsDataESemEsp);
  } catch (error) {
    return databaseError(error);
  }
};
export default searchSemEspByEspOfDB;
