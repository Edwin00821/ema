import { searchEspecialidadByIdOfDB } from 'database/Entities/CEspecialidad';
import { NextApiRequest, NextApiResponse } from 'next';
import { ResponseEspecialidad } from 'typings';
import { apiSuccess, apiError } from 'utils';

type Data = { message: string } | ResponseEspecialidad;
const searchEspecialidadById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_es } = req.query;

    const dataEspecialidad = await searchEspecialidadByIdOfDB(Number(id_es));

    return apiSuccess(res, dataEspecialidad, 'searchEspecialidadById');
  } catch (error) {
    return apiError(res, error, 'searchEspecialidadById');
  }
};

export default searchEspecialidadById;
