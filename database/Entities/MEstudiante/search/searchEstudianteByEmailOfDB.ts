import { pool } from 'config/db';
import { MMEstudianteReq } from 'models';
import { IMEstudianteRes } from 'interfaces/Entities';
import { EstudianteAdapter } from '../adapter';
import { databaseError } from 'utils';

type getEstudiante = (data: string) => Promise<IMEstudianteRes[]>;

const searchEstudianteByEmailOfDB: getEstudiante = async (
  correo_user: string
) => {
  try {
    const [RowsDataMEstudiante] = await pool.query<MMEstudianteReq[]>(
      'SELECT * FROM MEstudiante WHERE correo_user=?',
      [correo_user]
    );

    return await EstudianteAdapter(RowsDataMEstudiante);
  } catch (error) {
    return databaseError(error);
  }
};
export default searchEstudianteByEmailOfDB;
