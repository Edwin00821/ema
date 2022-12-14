import { searchInteligenciaByIdOfDB } from 'database/Entities/CInteligencia';
import { NextApiRequest, NextApiResponse } from 'next';
import { ResponseInteligencia} from 'typings';
import { apiSuccess, apiError } from 'utils';

type Data = { message: string } | ResponseInteligencia;
const searchInteligenciaById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_int } = req.query;

    const dataInteligencia = await searchInteligenciaByIdOfDB(Number(id_int));


    return apiSuccess(res, dataInteligencia, 'searchInteligenciaById');
  } catch (error) {
    return apiError(res, error, 'searchInteligenciaById');
  }
};

export default searchInteligenciaById;
