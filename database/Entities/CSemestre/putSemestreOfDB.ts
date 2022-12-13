import { pool, ResultSetHeader } from 'config/db';
import { ICSemestre } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

type resultSemestre = (data: ICSemestre) => Promise<ResultSetHeader[]>;

const putSemestreOfDB: resultSemestre = async ({ id_sem, tipo_sem }) => {
  try {
    const [RowsDataCSemestre] = await pool.query<ResultSetHeader>(
      'UPDATE CSemestre SET tipo_sem= ? WHERE id_sem= ?',
      [tipo_sem, id_sem]
    );

    return ResultSetHeaderAdapter(RowsDataCSemestre);
  } catch (error) {
    return databaseError(error);
  }
};

export default putSemestreOfDB;
