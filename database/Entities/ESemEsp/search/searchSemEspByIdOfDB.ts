import { pool } from 'config/db';
import { MESemEsp } from 'models';
import { IESemEsp } from 'interfaces/Entities';
import { SemEspAdapter } from '../adapter';
import { databaseError } from 'utils';

const searchSemEspBySemAndEspOfDB = async (
  id_semesp: number
): Promise<IESemEsp[]> => {
  try {
    const [RowsDataESemEsp] = await pool.query<MESemEsp[]>(
      'SELECT * FROM ESemEsp WHERE id_semesp = ?',
      [id_semesp]
    );

    return await SemEspAdapter(RowsDataESemEsp);
  } catch (error) {
    return databaseError(error);
  }
};
export default searchSemEspBySemAndEspOfDB;
