import { NextApiRequest, NextApiResponse } from 'next';
import { MCUaprendizaje } from 'models';
import { ICUaprendizaje } from 'interfaces/Entities';
import { putUaprendizajeOfDB } from 'database/Entities/CUaprendizaje';
import { apiResponse, apiResponseError } from 'utils';
type Data = { message: string } | MCUaprendizaje;

const putUnidadAprendizaje = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_ua, nombre_ua, id_semesp, valida_ua }: ICUaprendizaje = req.body;

    const dataUAprendizaje = await putUaprendizajeOfDB({
      id_ua,
      nombre_ua,
      id_semesp,
      valida_ua,
    });

    return apiResponse(res, dataUAprendizaje, 'Updated', 'UAprendizaje');
  } catch (error) {
    return apiResponseError(res, error, 'UAprendizaje');
  }
};

export default putUnidadAprendizaje;
