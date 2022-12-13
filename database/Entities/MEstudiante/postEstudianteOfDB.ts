import { pool, ResultSetHeader } from 'config/db';
import { IMEstudiante } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

type resultEstudiante = (data: IMEstudiante) => Promise<ResultSetHeader[]>;

const postEstudianteOfDB: resultEstudiante = async ({
  boleta_est,
  correo_user,
  id_es,
  id_sem,
  valida_est = 1,
}) => {
  try {
    const [RowsDataMEstudiante] = await pool.query<ResultSetHeader>(
      'INSERT INTO MEstudiante values (?, ?, ?, ?, ?)',
      [boleta_est, correo_user, id_es, id_sem, valida_est]
    );

    return ResultSetHeaderAdapter(RowsDataMEstudiante);
  } catch (error) {
    return databaseError(error);
  }
};

export default postEstudianteOfDB;
