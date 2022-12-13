export const databaseSuccess = <T>(
  RowsData: any[],
  callback: () => T[] | Promise<T[]>
): T[] | Promise<T[]> => {
  if (RowsData.length === 0) {
    return [];
  }
  return callback();
};
