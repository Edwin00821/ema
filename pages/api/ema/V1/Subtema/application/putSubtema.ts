import { NextApiRequest, NextApiResponse } from 'next';
import { MCSubtema } from 'models';
import { ICSubtema } from 'interfaces/Entities';
import { putSubtemaOfDB } from 'database/Entities/CSubtema';
import { apiResponse, apiResponseError } from 'utils';
type Data = { message: string } | MCSubtema;

const putSubtema = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id_sub, nombre_sub, id_tem, valida_sub }: ICSubtema = req.body;

    const dataSubtema = await putSubtemaOfDB({
      id_sub,
      nombre_sub,
      id_tem,
      valida_sub,
    });

    return apiResponse(res, dataSubtema, 'Updated', 'Subtema');
  } catch (error) {
    return apiResponseError(res, error, 'Subtema');
  }
};

export default putSubtema;
