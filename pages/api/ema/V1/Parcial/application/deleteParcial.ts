import { NextApiRequest, NextApiResponse } from 'next';
import { MCParcial } from 'models';
import { ICParcial } from 'interfaces/Entities';
import { deleteParcialOfDB } from 'database/Entities/CParcial';
import { apiResponse, apiResponseError } from 'utils';

type Data = { message: string } | MCParcial;

const deleteParcial = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_par, nombre_par, valida_par }: ICParcial = req.body;

    const dataParcial = await deleteParcialOfDB({
      id_par,
      nombre_par,
      valida_par,
    });

    return apiResponse(res, dataParcial, 'Deleted', 'Parcial');
  } catch (error) {
    return apiResponseError(res, error, 'Parcial');
  }
};

export default deleteParcial;
