import { pool } from 'config/db';
import { MCSemestre } from 'models';
import { ICSemestre } from 'interfaces/Entities';
import { databaseError } from 'utils';
import { SemestreAdapter } from './adapter';

const getAllSemestresOfDB = async (): Promise<ICSemestre[]> => {
	try {
		const [RowsDataCSemestre] = await pool.query<MCSemestre[]>(
			'SELECT * FROM CSemestre'
		);

		return SemestreAdapter(RowsDataCSemestre);
	} catch (error) {
		return databaseError(error);
	}
};
export default getAllSemestresOfDB;
