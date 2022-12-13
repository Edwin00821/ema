import { pool } from 'config/db';
import { MCRol } from 'models';
import { ICRol } from 'interfaces/Entities';
import { databaseError } from 'utils';
import { RolAdapter } from './adapter';

const getRoles = async ():Promise<ICRol[]> => {
	try {
		const [RowsDataCRol] = await pool.query<MCRol[]>('SELECT * FROM CRol');

		return RolAdapter(RowsDataCRol);
	} catch (error) {
		return databaseError(error);
	}
};
export default getRoles;
