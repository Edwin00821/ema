import { pool } from 'config/db';
import { MMEstudianteReq } from 'models';
import { IMEstudiante } from 'interfaces/Entities';
import { EstudianteAdapter } from './adapter/estudiante.adapter';
import { databaseError } from 'utils';

type getEstudiantes = () => Promise<IMEstudiante[]>;

const getAllEstudiantesOfDB: getEstudiantes = async () => {
  try {
    const [RowsDataMEstudiante] = await pool.query<MMEstudianteReq[]>(
      'SELECT * FROM MEstudiante'
    );

    return await EstudianteAdapter(RowsDataMEstudiante);
  } catch (error) {
    return databaseError(error);
  }
};
export default getAllEstudiantesOfDB;
