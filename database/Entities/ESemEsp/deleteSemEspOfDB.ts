import { pool, ResultSetHeader } from 'config/db';
import { IESemEsp } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

const deleteSemEspOfDB = async ({
  id_semesp,
  id_sem,
  id_es,
  valida_semesp,
}: IESemEsp): Promise<ResultSetHeader[]> => {
  try {

    const [RowsDataESemEsp] = await pool.query<ResultSetHeader>(
      'UPDATE CSemEsp SET valida_sem= ? WHERE id_sem= ?',
      [valida_semesp, id_semesp]
    );

    return ResultSetHeaderAdapter(RowsDataESemEsp);
  } catch (error) {
    return databaseError(error);
  }
};

export default deleteSemEspOfDB;
