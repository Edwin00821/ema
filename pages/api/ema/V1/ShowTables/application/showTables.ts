import { NextApiRequest, NextApiResponse } from 'next';
import { showTablesOfDB } from 'database/Others';
import { ResponseSemestre } from 'typings';
import { apiSuccess, apiError } from 'utils';

const showTables = async (
  _req: NextApiRequest,
  res: NextApiResponse<ResponseSemestre>
) => {
  try {
    const showTable = await showTablesOfDB();
    return apiSuccess(res, showTable, 'showTables');
  } catch (error) {
    return apiError(res, error, 'showTables');
  }
};

export default showTables;