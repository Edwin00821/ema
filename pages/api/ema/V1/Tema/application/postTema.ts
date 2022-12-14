import { NextApiRequest, NextApiResponse } from 'next';
import { MCTema } from 'models';
import { ICTema } from 'interfaces/Entities';
import { postTemaOfDB } from 'database/Entities/CTema';
import { apiResponse, apiResponseError } from 'utils';

type Data = { message: string } | MCTema;

const postTema = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id_tem, nombre_tem, id_par, id_ua, valida_tem }: ICTema = req.body;

    const dataTema = await postTemaOfDB({
      id_tem,
      nombre_tem,
      id_par,
      id_ua,
      valida_tem,
    });

    return apiResponse(res, dataTema, 'Created', 'Tema');
  } catch (error) {
    return apiResponseError(res, error, 'Tema');
  }
};

export default postTema;
