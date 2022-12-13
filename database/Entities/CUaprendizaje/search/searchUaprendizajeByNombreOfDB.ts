import { pool } from 'config/db';
import { MCUaprendizaje } from 'models';
import { ICUaprendizaje } from 'interfaces/Entities';
import { UaAdapter } from '../adapter';
import { databaseError } from 'utils';

const searchUaprendizajeByNombreOfDB = async (
  nombre_ua: string
): Promise<ICUaprendizaje[]> => {
  try {
    const [RowsDataCUaprendizaje] = await pool.query<MCUaprendizaje[]>(
      'SELECT * FROM CUaprendizaje WHERE nombre_ua = ?',
      [nombre_ua]
    );

    return await UaAdapter(RowsDataCUaprendizaje);
  } catch (error) {
    return databaseError(error);
  }
};
export default searchUaprendizajeByNombreOfDB;
