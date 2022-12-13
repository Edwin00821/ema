import { pool } from 'config/db';
import { RowDataPacket } from 'mysql2';

const showTablesOfDB = async () => {
	try {
		const [ShowTables] = await pool.query<RowDataPacket[]>('SHOW TABLES');
		const tables = ShowTables.map(async ({ Tables_in_ema }) => {
			const format = Tables_in_ema.split('')
				.map((letter: string, index: number) => {
					if (index === 0 || index === 1) {
						return letter.toUpperCase();
					}
					return letter;
				})
				.join('');
			const [Count] = await pool.query<any>(
				`Select Count(*) from ${Tables_in_ema}`
			);
			return { Tables_in_ema: format, Count: Count[0]['Count(*)'] };
		});
		return Promise.all(tables);
	} catch (error) {

		return [];
	}
};
export default showTablesOfDB;
