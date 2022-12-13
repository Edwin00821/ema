import { pool } from 'config/db';
import { MCUaprendizaje } from 'models';
import { ICUaprendizaje } from 'interfaces/Entities';
import { UaAdapter } from '../adapter';
import { databaseError } from 'utils';

const searchUaprendizajeBySemEspOfDB = async (
  id_semesp: number
): Promise<ICUaprendizaje[]> => {
  try {
    const [RowsDataCUaprendizaje] = await pool.query<MCUaprendizaje[]>(
      'SELECT * FROM CUaprendizaje WHERE id_semesp = ?',
      [id_semesp]
    );

    return await UaAdapter(RowsDataCUaprendizaje);
  } catch (error) {
    return databaseError(error);
  }
};
export default searchUaprendizajeBySemEspOfDB;
