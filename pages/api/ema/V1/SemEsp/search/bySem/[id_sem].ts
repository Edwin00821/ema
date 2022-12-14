import { searchSemEspBySemOfDB } from 'database/Entities/ESemEsp';
import { NextApiRequest, NextApiResponse } from 'next';
import { ResponseSemEsp } from 'typings';
import { apiSuccess, apiError } from 'utils';

type Data = { message: string } | ResponseSemEsp;
const searchSemEspBySem = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_sem } = req.query;

    const dataSemEsp = await searchSemEspBySemOfDB(Number(id_sem));

    return apiSuccess(res, dataSemEsp, 'searchSemEspBySem');
  } catch (error) {
    return apiError(res, error, 'searchSemEspBySem');
  }
};

export default searchSemEspBySem;
