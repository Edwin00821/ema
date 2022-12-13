import { pool } from 'config/db';
import { MCInteligencia } from 'models';
import { databaseError } from 'utils';
import { InteligenciaAdapter } from '../adapter';

const searchInteligenciaByIdOfDB = async (id_int: number) => {
	try {
		const [RowsDataCInteligencia] = await pool.query<MCInteligencia[]>(
			'SELECT * FROM CInteligencia WHERE id_int = ?',
			[id_int]
		);
		const DataInteligencia = InteligenciaAdapter(RowsDataCInteligencia);

		return DataInteligencia;
	} catch (error) {
		return databaseError(error);
	}
};
export default searchInteligenciaByIdOfDB;
