import { NextApiRequest, NextApiResponse } from 'next';
import { MCSubtema } from 'models';
import { ICSubtema } from 'interfaces/Entities';
import { postSubtemaOfDB } from 'database/Entities/CSubtema';
import { apiResponse, apiResponseError } from 'utils';

type Data = { message: string } | MCSubtema;

const postSubtema = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id_sub, nombre_sub, id_tem, valida_sub }: ICSubtema = req.body;

    const dataSubtema = await postSubtemaOfDB({
      id_sub,
      nombre_sub,
      id_tem,
      valida_sub,
    });

    return apiResponse(res, dataSubtema, 'Created', 'Subtema');
  } catch (error) {
    return apiResponseError(res, error, 'Subtema');
  }
};

export default postSubtema;
