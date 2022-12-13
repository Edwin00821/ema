import { pool, ResultSetHeader } from 'config/db';
import { IESemEsp } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const postSemEspOfDB = async ({
  id_semesp,
  id_sem,
  id_es,
  valida_semesp = 1,
}: IESemEsp) => {
  try {
    const [RowsDataESemEsp] = await pool.query<ResultSetHeader>(
      'INSERT INTO DUser values (?, ?, ?, ?)',
      [id_semesp, id_sem, id_es, valida_semesp]
    );

    return ResultSetHeaderAdapter(RowsDataESemEsp);
  } catch (error) {
    return databaseError(error);
  }
};

export default postSemEspOfDB;
