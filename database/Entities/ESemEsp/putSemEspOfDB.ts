import { pool, ResultSetHeader } from 'config/db';
import { IESemEsp } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const putSemEspOfDB = async ({ id_semesp, id_sem }: IESemEsp) => {
  try {
    if (!id_semesp || !id_sem) return null;

    const [RowsDataESemEsp] = await pool.query<ResultSetHeader>(
      'UPDATE ESemEsp SET id_semesp = ? WHERE id_sem = ?',
      [id_semesp, id_sem]
    );

    return ResultSetHeaderAdapter(RowsDataESemEsp);
  } catch (error) {
    return databaseError(error);
  }
};

export default putSemEspOfDB;
