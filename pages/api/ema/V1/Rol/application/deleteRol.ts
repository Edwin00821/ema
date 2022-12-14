import { NextApiRequest, NextApiResponse } from 'next';
import { MCRol } from 'models';
import { ICRol } from 'interfaces/Entities';
import { deleteRolOfDB } from 'database/Entities/CRol';
import { apiResponse, apiResponseError } from 'utils';

type Data = { message: string } | MCRol;

const deleteRol = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id_rol, tipo_rol, valida_rol }: ICRol = req.body;

    const dataRol = await deleteRolOfDB({
      id_rol,
      tipo_rol,
      valida_rol,
    });

    return apiResponse(res, dataRol, 'Deleted', 'Rol');
  } catch (error) {
    return apiResponseError(res, error, 'Rol');
  }
};

export default deleteRol;
