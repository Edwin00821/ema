import { NextApiRequest, NextApiResponse } from 'next';
import { MCEspecialidad } from 'models';
import { ICEspecialidad } from 'interfaces/Entities';
import { putEspecialidadOfDB } from 'database/Entities/CEspecialidad';
import { apiResponse, apiResponseError } from 'utils';
type Data = { message: string } | MCEspecialidad;

const putEspecialidad = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_es, nombre_es, valida_es }: ICEspecialidad = req.body;

    const dataEspecialidad = await putEspecialidadOfDB({
      id_es,
      nombre_es,
      valida_es,
    });

    return apiResponse(res, dataEspecialidad, 'Updated', 'Especialidad');
  } catch (error) {
    return apiResponseError(res, error, 'Especialidad');
  }
};

export default putEspecialidad;
