import { NextApiRequest, NextApiResponse } from 'next';
import { MCInteligencia } from 'models';
import { ICInteligencia } from 'interfaces/Entities';
import { postInteligenciaOfDB } from 'database/Entities/CInteligencia';
import { apiResponse, apiResponseError } from 'utils';

type Data = { message: string } | MCInteligencia;

const postInteligencia = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_int, tipo_int, valida_int }: ICInteligencia = req.body;

    const dataInteligencia = await postInteligenciaOfDB({
      id_int,
      tipo_int,
      valida_int,
    });

    return apiResponse(res, dataInteligencia, 'Created', 'Inteligencia');
  } catch (error) {
    return apiResponseError(res, error, 'Inteligencia');
  }
};

export default postInteligencia;
