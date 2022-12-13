import { pool } from 'config/db';
import { MMPersona, MMPersonaReq } from 'models';
import { IMPersonaReq, IMPersonaRes } from 'interfaces/Entities';
import { personaAdapter } from './adapter';
import { databaseError } from 'utils';
import { EstudianteAdapter } from '../MEstudiante/adapter';

type getPersonas = () => Promise<IMPersonaRes[]>;

const getAllPersonasOfDB: getPersonas = async () => {
  try {
    const [RowsDataMPersona] = await pool.query<MMPersonaReq[]>(
      'SELECT * FROM MPersona'
    );

    return await personaAdapter(RowsDataMPersona);
  } catch (error) {
    return databaseError(error);
  }
};
export default getAllPersonasOfDB;
