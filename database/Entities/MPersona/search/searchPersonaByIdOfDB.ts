import { pool } from 'config/db';
import { MMPersonaReq } from 'models';
import { IMPersonaRes } from 'interfaces/Entities';
import { personaAdapter } from '../adapter';
import { databaseError } from 'utils';

type getPersona = (data: number) => Promise<IMPersonaRes[]>;

const searchPersonaByIdOfDB: getPersona = async (id_per: number) => {
  try {
    const [RowsDataMPersona] = await pool.query<MMPersonaReq[]>(
      'SELECT * FROM MPersona WHERE id_per = ?',
      [id_per]
    );
    return await personaAdapter(RowsDataMPersona);
  } catch (error) {
    return databaseError(error);
  }
};
export default searchPersonaByIdOfDB;
