import { NextApiRequest, NextApiResponse } from 'next';
import { MCUaprendizaje } from 'models';
import { ICUaprendizaje } from 'interfaces/Entities';
import { deleteUaprendizajeOfDB } from 'database/Entities/CUaprendizaje';
import { apiResponse, apiResponseError } from 'utils';
type Data = { message: string } | MCUaprendizaje;

const deleteUnidadAprendizaje = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_ua, nombre_ua, id_semesp, valida_ua }: ICUaprendizaje = req.body;

    const dataUAprendizaje = await deleteUaprendizajeOfDB({
      id_ua,
      nombre_ua,
      id_semesp,
      valida_ua,
    });

    return apiResponse(res, dataUAprendizaje, 'Deleted', 'UAprendizaje');
  } catch (error) {
    return apiResponseError(res, error, 'UAprendizaje');
  }
};

export default deleteUnidadAprendizaje;
