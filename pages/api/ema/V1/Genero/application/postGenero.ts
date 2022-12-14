import { NextApiRequest, NextApiResponse } from 'next';
import { MCGenero } from 'models';
import { ICGenero } from 'interfaces/Entities';
import { postGeneroOfDB } from 'database/Entities/CGenero';
import { apiResponse, apiResponseError } from 'utils';

type Data = { message: string } | MCGenero;

const postGenero = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id_gen, tipo_gen, valida_gen }: ICGenero = req.body;

    const dataGenero = await postGeneroOfDB({
      id_gen,
      tipo_gen,
      valida_gen,
    });

    return apiResponse(res, dataGenero, 'Created', 'Genero');
  } catch (error) {
    return apiResponseError(res, error, 'Genero');
  }
};

export default postGenero;
