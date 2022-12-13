import { pool } from 'config/db';
import { MCGeneroReq } from 'models';
import { ICGeneroRes } from 'interfaces/Entities';
import { databaseError } from 'utils';
import { GeneroAdapter } from '../adapter';

type getGenero = (data: number) => Promise<ICGeneroRes[]>;

const searchGeneroByIdOfDB: getGenero = async (id) => {
  try {
    const [RowsDataCGenero] = await pool.query<MCGeneroReq[]>(
      'SELECT * FROM CGenero WHERE id_gen = ?',
      [id]
    );

    return await GeneroAdapter(RowsDataCGenero);
  } catch (error) {
    return databaseError(error);
  }
};

export default searchGeneroByIdOfDB;
