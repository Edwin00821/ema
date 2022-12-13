import { GeneroAdapter } from './adapter/genero.adapter';
import { pool } from 'config/db';
import { MCGenero } from 'models';
import { databaseError } from 'utils';
import { ICGenero } from 'interfaces/Entities';

const getAllGenerosOfDB = async (): Promise<ICGenero[]> => {
  try {
    const [RowsDataCGenero] = await pool.query<MCGenero[]>(
      'SELECT * FROM CGenero'
    );
    return GeneroAdapter(RowsDataCGenero);
  } catch (error) {
    return databaseError(error);
  }
};
export default getAllGenerosOfDB;
