import {pool} from 'config/db';
import {MCGeneroReq} from 'models';
import {databaseError} from 'utils';
import {GeneroAdapter} from '../adapter';
import {ICGeneroRes} from 'interfaces/Entities';

type getGenero = (data: string) => Promise<ICGeneroRes[]>;

const searchGeneroByTipoOfDB: getGenero = async (type: string) => {
  try {
    const [RowsDataCGenero] = await pool.query<MCGeneroReq[]>(
      'SELECT * FROM CGenero WHERE tipo_gen = ?',
      [type]
    );

		return await GeneroAdapter(RowsDataCGenero);
  } catch (error) {

    return databaseError(error);
  }
};
export default searchGeneroByTipoOfDB;
