import { NextApiRequest, NextApiResponse } from 'next';
import { MMEstudiante } from 'models';
import { IMEstudiante } from 'interfaces/Entities';
import { postEstudianteOfDB } from 'database/Entities/MEstudiante';
import { apiResponse, apiResponseError } from 'utils';

type Data = { message: string } | MMEstudiante;

const postEstudiante = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { boleta_est, correo_user, id_es, id_sem, valida_est }: IMEstudiante =
      req.body;

    const dataEstudiante = await postEstudianteOfDB({
      boleta_est,
      correo_user,
      id_es,
      id_sem,
      valida_est,
    });

    return apiResponse(res, dataEstudiante, 'Created', 'Estudiante');
  } catch (error) {
    return apiResponseError(res, error, 'Estudiante');
  }
};

export default postEstudiante;
