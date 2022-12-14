import { NextApiRequest, NextApiResponse } from 'next';
import { MCRol } from 'models';
import { ICRol } from 'interfaces/Entities';
import { postRolOfDB } from 'database/Entities/CRol';
import { apiResponse, apiResponseError } from 'utils';

type Data = { message: string } | MCRol;

const postRol = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id_rol, tipo_rol, valida_rol }: ICRol = req.body;

    const dataRol = await postRolOfDB({
      id_rol,
      tipo_rol,
      valida_rol,
    });

    return apiResponse(res, dataRol, 'Created', 'Rol');
  } catch (error) {
    return apiResponseError(res, error, 'Rol');
  }
};

export default postRol;
