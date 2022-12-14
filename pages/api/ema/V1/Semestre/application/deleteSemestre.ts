import { NextApiRequest, NextApiResponse } from 'next';
import { MCSemestre } from 'models';
import { ICSemestre } from 'interfaces/Entities';
import { deleteSemestreOfDB } from 'database/Entities/CSemestre';
import { apiResponse, apiResponseError } from 'utils';
type Data = { message: string } | MCSemestre;

const deleteSemestre = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_sem, tipo_sem, valida_sem }: ICSemestre = req.body;

    const dataSemestre = await deleteSemestreOfDB({
      id_sem,
      tipo_sem,
      valida_sem,
    });

    return apiResponse(res, dataSemestre, 'Deleted', 'Semestre');
  } catch (error) {
    return apiResponseError(res, error, 'Semestre');
  }
};

export default deleteSemestre;
