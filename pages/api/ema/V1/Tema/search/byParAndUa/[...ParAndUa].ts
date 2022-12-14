import { NextApiRequest, NextApiResponse } from 'next';
import { apiSuccess } from 'utils/success';
import { apiError } from 'utils/errors';
import { ResponseTema } from 'typings';
import { searchTemaByParcialAndUa } from 'database/Entities/CTema';

type Data = { message: string } | ResponseTema;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const [id_par, id_ua] = req.query.ParAndUa as string[];

    const dataTema = await searchTemaByParcialAndUa(
      Number(id_par),
      Number(id_ua)
    );
    return apiSuccess(res, dataTema, 'SemEsp');
  } catch (error) {
    return apiError(res, error, 'searchSemEsp');
  }
}
