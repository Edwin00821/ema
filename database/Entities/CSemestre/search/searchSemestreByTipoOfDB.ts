import { pool } from 'config/db';
import { MCSemestre } from 'models';
import { ICSemestre } from 'interfaces/Entities';
import { databaseError } from 'utils';
import { SemestreAdapter } from '../adapter';

const searchSemestreByTipoOfDB = async (tipo_sem: string): Promise<ICSemestre[]> => {
	try {
		const [RowsDataCSemestre] = await pool.query<MCSemestre[]>(
			'SELECT * FROM CSemestre WHERE tipo_sem = ?',
			[tipo_sem]
		);

		return SemestreAdapter(RowsDataCSemestre);
	} catch (error) {
		return databaseError(error);
	}
};
export default searchSemestreByTipoOfDB;
