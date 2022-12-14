import { NextApiRequest, NextApiResponse } from 'next';
import { MCSemestre } from 'models';
import { ICSemestre } from 'interfaces/Entities';
import { postSemestreOfDB } from 'database/Entities/CSemestre';
import { apiResponse, apiResponseError } from 'utils';

type Data = { message: string } | MCSemestre;

const postSemestre = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_sem, tipo_sem, valida_sem }: ICSemestre = req.body;

    const dataSemestre = await postSemestreOfDB({
      id_sem,
      tipo_sem,
      valida_sem,
    });

    return apiResponse(res, dataSemestre, 'Created', 'Semestre');
  } catch (error) {
    return apiResponseError(res, error, 'Semestre');
  }
};

export default postSemestre;
