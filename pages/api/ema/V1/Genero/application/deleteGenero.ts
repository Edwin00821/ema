import { NextApiRequest, NextApiResponse } from 'next';
import { MCGenero } from 'models';
import { ICGenero } from 'interfaces/Entities';
import { deleteGeneroOfDB } from 'database/Entities/CGenero';
import { apiResponse, apiResponseError } from 'utils';

type Data = { message: string } | MCGenero;

const deleteGenero = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_gen, tipo_gen, valida_gen }: ICGenero = req.body;

    const dataGenero = await deleteGeneroOfDB({
      id_gen,
      tipo_gen,
      valida_gen,
    });

    return apiResponse(res, dataGenero, 'Deleted', 'Genero');
  } catch (error) {
    return apiResponseError(res, error, 'Genero');
  }
};

export default deleteGenero;
