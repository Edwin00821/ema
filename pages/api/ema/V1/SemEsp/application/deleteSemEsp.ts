import { NextApiRequest, NextApiResponse } from 'next';
import { MESemEsp } from 'models';
import { IESemEsp } from 'interfaces/Entities';
import { deleteSemEspOfDB } from 'database/Entities/ESemEsp';
import { apiResponse, apiResponseError } from 'utils';
type Data = { message: string } | MESemEsp;

const deleteSemEsp = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_semesp, id_sem, id_es, valida_semesp }: IESemEsp = req.body;

    const dataSemEsp = await deleteSemEspOfDB({
      id_semesp,
      id_sem,
      id_es,
      valida_semesp,
    });

    return apiResponse(res, dataSemEsp, 'Deleted', 'SemEsp');
  } catch (error) {
    return apiResponseError(res, error, 'SemEsp');
  }
};

export default deleteSemEsp;
