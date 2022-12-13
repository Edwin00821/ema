import { createPool, RowDataPacket } from 'mysql2/promise';
import { databaseError } from 'utils';

export type { ResultSetHeader } from 'mysql2/promise';

export const pool = createPool({
  connectionLimit: 5,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
});

export const query = async <T>(
  query: string,
  adapter: (data: T[]) => T[] | Promise<T[]>,
  values?: T[]
) => {
  type RowDataPacketT = RowDataPacket & T;
  try {
    const [data] = await pool.query<RowDataPacketT[]>(query, values);

    pool.getConnection().then((conn) => {
      conn.release();
    });

    return await adapter(data);
  } catch (error) {
    return databaseError(error);
  }
};
