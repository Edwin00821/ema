import { pool } from 'config/db';
import { MMEstudianteReq } from 'models';
import { IMEstudianteRes } from 'interfaces/Entities';
import { EstudianteAdapter } from '../adapter';
import { databaseError } from 'utils';

type getEstudiante = (data: string) => Promise<IMEstudianteRes[]>;

const searchEstudianteByBoletaOfDB: getEstudiante = async (
  boleta_est: string
) => {
  try {
    const [RowsDataMEstudiante] = await pool.query<MMEstudianteReq[]>(
      'SELECT * FROM MEstudiante WHERE boleta_est = ?',
      [boleta_est]
    );

    return await EstudianteAdapter(RowsDataMEstudiante);
  } catch (error) {
    return databaseError(error);
  }
};
export default searchEstudianteByBoletaOfDB;
