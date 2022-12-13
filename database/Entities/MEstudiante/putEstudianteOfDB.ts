import { pool, ResultSetHeader } from 'config/db';
import { IMEstudiante } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

type resultEstudiante = (data: IMEstudiante) => Promise<ResultSetHeader[]>;

const putEstudianteOfDB: resultEstudiante = async ({
  boleta_est,
  correo_user,
  id_es,
  id_sem,
}) => {
  try {
    const [RowsDataMEstudiante] = await pool.query<ResultSetHeader>(
      'UPDATE MEstudiante SET boleta_est= ?, id_es=?, id_sem=?  WHERE correo_user= ?',
      [boleta_est, id_es, id_sem, correo_user]
    );

    return ResultSetHeaderAdapter(RowsDataMEstudiante);
  } catch (error) {
    return databaseError(error);
  }
};

export default putEstudianteOfDB;
