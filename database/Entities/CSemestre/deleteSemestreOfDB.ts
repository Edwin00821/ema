import { pool, ResultSetHeader } from 'config/db';
import { ICSemestre } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

type resultSemestre = (data: ICSemestre) => Promise<ResultSetHeader[]>;

const deleteSemestreOfDB: resultSemestre = async ({ id_sem, valida_sem }) => {
  try {

    const [RowsDataCSemestre] = await pool.query<ResultSetHeader>(
      'UPDATE CSemestre SET valida_sem= ? WHERE id_sem= ?',
      [valida_sem, id_sem]
    );

    return ResultSetHeaderAdapter(RowsDataCSemestre);
  } catch (error) {
    return databaseError(error);
  }
};

export default deleteSemestreOfDB;
