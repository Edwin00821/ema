import { pool } from 'config/db';
import { MCRol } from 'models';
import { ICRol } from 'interfaces/Entities';
import { databaseError } from 'utils';
import { RolAdapter } from '../adapter';

const searchRolByIdOfDB = async (id_rol: number): Promise<ICRol[]> => {
	try {
		const [RowsDataCRol] = await pool.query<MCRol[]>(
			'SELECT * FROM CRol WHERE id_rol = ?',
			[id_rol]
		);

		return RolAdapter(RowsDataCRol);
	} catch (error) {
		return databaseError(error);
	}
};
export default searchRolByIdOfDB;
