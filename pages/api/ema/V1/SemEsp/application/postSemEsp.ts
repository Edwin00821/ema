import { NextApiRequest, NextApiResponse } from 'next';
import { MESemEsp } from 'models';
import { IESemEsp } from 'interfaces/Entities';
import { postSemEspOfDB } from 'database/Entities/ESemEsp';
import { apiResponse, apiResponseError } from 'utils';

type Data = { message: string } | MESemEsp;

const postSemEsp = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id_semesp, id_sem, id_es, valida_semesp }: IESemEsp = req.body;

    const dataSemEsp = await postSemEspOfDB({
      id_semesp,
      id_sem,
      id_es,
      valida_semesp,
    });

    return apiResponse(res, dataSemEsp, 'Created', 'SemEsp');
  } catch (error) {
    return apiResponseError(res, error, 'SemEsp');
  }
};

export default postSemEsp;
