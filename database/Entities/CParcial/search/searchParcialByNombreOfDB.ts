import { pool } from 'config/db';
import { ICParcial } from 'interfaces/Entities';
import { MCParcial } from 'models';
import { databaseError } from 'utils';
import { ParcialAdapter } from '../adapter';

const searchParcialByNombreOfDB = async (
  nombre_par: string
): Promise<ICParcial[]> => {
  try {
    const [RowsDataCParcial] = await pool.query<MCParcial[]>(
      'SELECT * FROM CParcial WHERE nombre_par = ?',
      [nombre_par]
    );

    return ParcialAdapter(RowsDataCParcial);
  } catch (error) {
    return databaseError(error);
  }
};
export default searchParcialByNombreOfDB;
