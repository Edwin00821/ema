import { pool, ResultSetHeader } from 'config/db';
import { IMPersona } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

type resultPersona = (data: IMPersona) => Promise<ResultSetHeader[]>;

const postPersonaOfDB: resultPersona = async ({
  id_per,
  nombre_per,
  appat_per,
  apmat_per,
  fecha_de_nacimiento_per,
  id_gen,
  id_int = 1,
  valida_per = 1,
}) => {
  try {
    const year = new Date(fecha_de_nacimiento_per).getFullYear();
    const month = new Date(fecha_de_nacimiento_per).getMonth() + 1;
    const day = new Date(fecha_de_nacimiento_per).getDate();
    const [RowsDataMPersona] = await pool.query<ResultSetHeader>(
      'INSERT INTO MPersona values (?, ?, ?, ?, ?, ?, ?, ?) ',
      [
        id_per,
        nombre_per,
        appat_per,
        apmat_per,
        `${year}-${month}-${day}`,
        id_gen,
        id_int,
        valida_per,
      ]
    );

    return ResultSetHeaderAdapter(RowsDataMPersona);
  } catch (error) {
    return databaseError(error);
  }
};

export default postPersonaOfDB;
