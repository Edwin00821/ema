import { NextApiRequest, NextApiResponse } from 'next';
import { MCSubtema } from 'models';
import { ICSubtema } from 'interfaces/Entities';
import { deleteSubtemaOfDB } from 'database/Entities/CSubtema';
import { apiResponse, apiResponseError } from 'utils';
type Data = { message: string } | MCSubtema;

const deleteSubtema = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_sub, nombre_sub, id_tem, valida_sub }: ICSubtema = req.body;

    const dataSubtema = await deleteSubtemaOfDB({
      id_sub,
      nombre_sub,
      id_tem,
      valida_sub,
    });

    return apiResponse(res, dataSubtema, 'Deleted', 'Subtema');
  } catch (error) {
    return apiResponseError(res, error, 'Subtema');
  }
};

export default deleteSubtema;
