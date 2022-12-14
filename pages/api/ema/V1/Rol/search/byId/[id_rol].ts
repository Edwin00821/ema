import { searchRolByIdOfDB } from 'database/Entities/CRol';
import { NextApiRequest, NextApiResponse } from 'next';
import {ResponseRol} from 'typings';
import { apiSuccess, apiError } from 'utils';

type Data = { message: string } | ResponseRol;
const searchRolById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_rol } = req.query;

    const dataRol = await searchRolByIdOfDB(Number(id_rol));

    return apiSuccess(res, dataRol, 'searchRolById');
  } catch (error) {
    return apiError(res, error, 'searchRolById');
  }
};

export default searchRolById;
