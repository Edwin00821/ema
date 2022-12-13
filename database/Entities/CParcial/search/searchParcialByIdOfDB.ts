import { pool } from 'config/db';
import { ICParcial } from 'interfaces/Entities';
import { MCParcial } from 'models';
import { databaseError } from 'utils';
import { ParcialAdapter } from '../adapter';

const searchParcialByIdOfDB = async (id_par: number): Promise<ICParcial[]> => {
  try {
    const [RowsDataCParcial] = await pool.query<MCParcial[]>(
      'SELECT * FROM CParcial WHERE id_par = ?',
      [id_par]
    );

    return ParcialAdapter(RowsDataCParcial);
  } catch (error) {
    return databaseError(error);
  }
};
export default searchParcialByIdOfDB;
