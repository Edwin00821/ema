import { pool } from 'config/db';
import { MMPersonaReq } from 'models';
import {
  IMEstudianteRes,
  IMPersona,
  IMPersonaReq,
  IMPersonaRes,
} from 'interfaces/Entities';
import { personaAdapter } from '../adapter';
import { databaseError } from 'utils';

type getPersona = (data: string) => Promise<IMPersonaRes[]>;

const searchPersonaByApptAndApmatOfDB = async (
  appat_per: string,
  apmat_per: string
): Promise<IMPersonaRes[]> => {
  try {
    const [RowsDataMPersona] = await pool.query<MMPersonaReq[]>(
      'SELECT * FROM MPersona WHERE appat_per = ? AND apmat_per = ?',
      [appat_per.toUpperCase(), apmat_per.toUpperCase()]
    );

    return await personaAdapter(RowsDataMPersona as IMPersonaReq[]);
  } catch (error) {
    return databaseError(error);
  }
};
export default searchPersonaByApptAndApmatOfDB;
