import { pool } from 'config/db';
import { MCUaprendizaje } from 'models';
import { ICUaprendizaje } from 'interfaces/Entities';
import { UaAdapter } from './adapter';
import { databaseError } from 'utils';

const getAllUaprendizajeOfDB = async (): Promise<ICUaprendizaje[]> => {
  try {
    const [RowsDataCUaprendizaje] = await pool.query<MCUaprendizaje[]>(
      'SELECT * FROM CUaprendizaje'
    );

    return await UaAdapter(RowsDataCUaprendizaje);
  } catch (error) {
    return databaseError(error);
  }
};
export default getAllUaprendizajeOfDB;
