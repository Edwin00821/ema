import { pool } from 'config/db';
import { MCParcial } from 'models';
import { ParcialAdapter } from './adapter';
import { databaseError } from 'utils';
import { ICParcial } from 'interfaces/Entities';

const getAllParcialesOfDB = async (): Promise<ICParcial[]> => {
  try {
    const [RowsDataCParcial] = await pool.query<MCParcial[]>(
      'SELECT * FROM CParcial'
    );

    return ParcialAdapter(RowsDataCParcial);
  } catch (error) {
    return databaseError(error);
  }
};
export default getAllParcialesOfDB;
