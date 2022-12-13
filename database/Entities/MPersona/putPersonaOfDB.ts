import { pool, ResultSetHeader } from 'config/db';
import { IMPersona } from 'interfaces/Entities';
import { ResultSetHeaderAdapter } from '../adapter';
import { databaseError } from 'utils';

type resultPersona = (data: IMPersona) => Promise<ResultSetHeader[]>;

const putPersonaOfDB: resultPersona = async ({
  id_per,
  nombre_per,
  appat_per,
  apmat_per,
  fecha_de_nacimiento_per,
  id_gen,
  id_int,
}) => {
  console.log({
    id_per,
    nombre_per,
    appat_per,
    apmat_per,
    fecha_de_nacimiento_per,
    id_gen,
    id_int,
  });

  try {
    const [RowsDataMPersona] = await pool.query<ResultSetHeader>(
      'UPDATE MPersona SET nombre_per = ?, appat_per = ?, apmat_per = ?, fecha_de_nacimiento_per = ?, id_gen = ?, id_int = ? WHERE id_per = ?',
      [
        nombre_per,
        appat_per,
        apmat_per,
        fecha_de_nacimiento_per,
        id_gen,
        id_int,
        id_per,
      ]
    );
    return ResultSetHeaderAdapter(RowsDataMPersona);
  } catch (error) {
    return databaseError(error);
  }
};

export default putPersonaOfDB;
