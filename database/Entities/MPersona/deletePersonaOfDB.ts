import { pool, ResultSetHeader } from 'config/db';
import { IMPersona } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

type resultPersona = (data: IMPersona) => Promise<ResultSetHeader[]>;

const deletePersonaOfDB: resultPersona = async ({ id_per, valida_per }) => {
  try {
    const [RowsDataMPersona] = await pool.query<ResultSetHeader>(
      'UPDATE MPersona SET valida_per=? WHERE id_per= ?',
      [valida_per, id_per]
    );

    return ResultSetHeaderAdapter(RowsDataMPersona);
  } catch (error) {
    return databaseError(error);
  }
};

export default deletePersonaOfDB;
