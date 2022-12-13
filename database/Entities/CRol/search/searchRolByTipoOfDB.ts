import { pool } from 'config/db';
import { MCRol } from 'models';
import { ICRol } from 'interfaces/Entities';
import { databaseError } from 'utils';
import { RolAdapter } from '../adapter';

const searchRolByTipoOfDB = async (tipo_rol: string): Promise<ICRol[]>  => {
	try {
		const [RowsDataCRol] = await pool.query<MCRol[]>(
			'SELECT * FROM CRol WHERE tipo_rol = ?',
			[tipo_rol]
		);

		return RolAdapter(RowsDataCRol);
	} catch (error) {
		return databaseError(error);
	}
};
export default searchRolByTipoOfDB;
