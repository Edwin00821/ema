import { pool } from 'config/db';
import { SemestreAdapter } from '../adapter';
import { MCSemestre } from 'models';
import { ICSemestre } from 'interfaces/Entities';
import { databaseError } from 'utils';

const searchSemestreByIdOfDB = async (id_sem: number): Promise<ICSemestre[]> => {
	try {
		const [RowsDataCSemestre] = await pool.query<MCSemestre[]>(
			'SELECT * FROM CSemestre WHERE id_sem = ?',
			[id_sem]
		);

		return SemestreAdapter(RowsDataCSemestre);
	} catch (error) {

		return databaseError(error);
	}
};
export default searchSemestreByIdOfDB;
