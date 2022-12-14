import { NextApiRequest, NextApiResponse } from 'next';
import { MMEstudiante } from 'models';
import { IMEstudiante } from 'interfaces/Entities';
import { deleteEstudianteOfDB } from 'database/Entities/MEstudiante';
import { apiResponse, apiResponseError } from 'utils';

type Data = { message: string } | MMEstudiante;

const deleteEstudiante = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { boleta_est, correo_user, id_es, id_sem, valida_est }: IMEstudiante =
      req.body;

    const dataEstudiante = await deleteEstudianteOfDB({
      boleta_est,
      correo_user,
      id_es,
      id_sem,
      valida_est,
    });

    return apiResponse(res, dataEstudiante, 'Deleted', 'Estudiante');
  } catch (error) {
    return apiResponseError(res, error, 'Estudiante');
  }
};

export default deleteEstudiante;
