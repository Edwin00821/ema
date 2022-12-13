import { pool } from 'config/db';
import { MCInteligencia } from 'models';
import { databaseError } from 'utils';
import { InteligenciaAdapter } from '../adapter';

const searchInteligenciaByTipoOfDB = async (tipo_int: string) => {
	try {
		const [RowsDataCInteligencia] = await pool.query<MCInteligencia[]>(
			'SELECT * FROM CInteligencia WHERE tipo_int = ?',
			[tipo_int]
		);

		const DataInteligencia = InteligenciaAdapter(RowsDataCInteligencia);

		return DataInteligencia;
	} catch (error) {
		return databaseError(error);
	}
};
export default searchInteligenciaByTipoOfDB;
