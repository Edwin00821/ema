import { pool } from 'config/db';
import { MESemEsp } from 'models';
import { IESemEsp } from 'interfaces/Entities';
import { SemEspAdapter } from './adapter';
import { databaseError } from 'utils';

const getAllSemEspOfDB = async (): Promise<IESemEsp[]> => {
  try {
    const [RowsDataESemEsp] = await pool.query<MESemEsp[]>(
      'SELECT * FROM ESemEsp'
    );

    return await SemEspAdapter(RowsDataESemEsp);
  } catch (error) {
    return databaseError(error);
  }
};
export default getAllSemEspOfDB;
