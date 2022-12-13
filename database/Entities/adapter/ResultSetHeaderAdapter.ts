import { ResultSetHeader } from 'config/db';
type SetHeaderAdapter = (data: ResultSetHeader) => ResultSetHeader[];
export const ResultSetHeaderAdapter: SetHeaderAdapter = (RowsData) => {
  const { affectedRows } = RowsData;

  if (affectedRows <= 0) return [] as ResultSetHeader[];

  return [RowsData];
};
