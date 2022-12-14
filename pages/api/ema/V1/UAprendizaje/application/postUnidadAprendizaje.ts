import { NextApiRequest, NextApiResponse } from 'next';
import { MCUaprendizaje } from 'models';
import { ICUaprendizaje } from 'interfaces/Entities';
import { postUaprendizajeOfDB } from 'database/Entities/CUaprendizaje';
import { apiResponse, apiResponseError } from 'utils';

type Data = { message: string } | MCUaprendizaje;

const postUnidadAprendizaje = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_ua, nombre_ua, id_semesp, valida_ua }: ICUaprendizaje = req.body;

    const dataUAprendizaje = await postUaprendizajeOfDB({
      id_ua,
      nombre_ua,
      id_semesp,
      valida_ua,
    });

    return apiResponse(res, dataUAprendizaje, 'Created', 'UAprendizaje');
  } catch (error) {
    return apiResponseError(res, error, 'UAprendizaje');
  }
};

export default postUnidadAprendizaje;
