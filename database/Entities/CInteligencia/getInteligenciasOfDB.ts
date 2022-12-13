import { pool } from 'config/db';
import { MCInteligencia } from 'models';
import { InteligenciaAdapter } from './adapter';
import { databaseError } from 'utils';
import { ICInteligencia } from 'interfaces/Entities';

const getInteligenciasOfDB = async (): Promise<ICInteligencia[]> => {
  try {
    const [RowsDataCInteligencia] = await pool.query<MCInteligencia[]>(
      'SELECT * FROM CInteligencia'
    );

    return InteligenciaAdapter(RowsDataCInteligencia);
  } catch (error) {
    return databaseError(error);
  }
};
export default getInteligenciasOfDB;
