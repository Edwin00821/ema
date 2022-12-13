import { pool, ResultSetHeader } from 'config/db';
import { IMEstudiante } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

type resultEstudiante = (data: IMEstudiante) => Promise<ResultSetHeader[]>;

const deleteEstudianteOfDB: resultEstudiante = async ({
  boleta_est,
  valida_est,
}) => {
  try {
    const [RowsDataMEstudiante] = await pool.query<ResultSetHeader>(
      'UPDATE MEstudiante SET valida_est=?  WHERE boleta_est= ?',
      [valida_est, boleta_est]
    );

    return ResultSetHeaderAdapter(RowsDataMEstudiante);
  } catch (error) {
    return databaseError(error);
  }
};

export default deleteEstudianteOfDB;
