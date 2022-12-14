import { searchParcialByIdOfDB } from 'database/Entities/CParcial';
import { NextApiRequest, NextApiResponse } from 'next';
import { ResponseParcial } from 'typings';
import { apiSuccess, apiError } from 'utils';

type Data = { message: string } | ResponseParcial;
const searchParcialById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_par } = req.query;

    const dataParcial = await searchParcialByIdOfDB(Number(id_par));

    return apiSuccess(res, dataParcial, 'searchParcialById');
  } catch (error) {
    return apiError(res, error, 'searchParcialById');
  }
};

export default searchParcialById;
