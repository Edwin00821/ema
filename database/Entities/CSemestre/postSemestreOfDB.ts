import { pool, ResultSetHeader } from 'config/db';
import { ICSemestre } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

type resultSemestre = (data: ICSemestre) => Promise<ResultSetHeader[]>;

const postSemestreOfDB: resultSemestre = async ({
  id_sem,
  tipo_sem,
  valida_sem = 1,
}: ICSemestre) => {
  try {
    const [RowsDataCSemestre] = await pool.query<ResultSetHeader>(
      'INSERT INTO CSemestre values (?,?,?)',
      [id_sem, tipo_sem, valida_sem]
    );

    return ResultSetHeaderAdapter(RowsDataCSemestre);
  } catch (error) {
    return databaseError(error);
  }
};

export default postSemestreOfDB;
