import { NextApiRequest, NextApiResponse } from 'next';
import { MMPersona } from 'models';
import { IMPersona } from 'interfaces/Entities';
import { deletePersonaOfDB } from 'database/Entities/MPersona';
import { apiResponse, apiResponseError } from 'utils';

type Data = { message: string } | MMPersona;

const deletePersona = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const {
      id_per,
      nombre_per,
      appat_per,
      apmat_per,
      fecha_de_nacimiento_per,
      id_gen,
      id_int,
      valida_per,
    }: IMPersona = req.body;

    const dataPersona = await deletePersonaOfDB({
      id_per,
      nombre_per,
      appat_per,
      apmat_per,
      fecha_de_nacimiento_per,
      id_gen,
      id_int,
      valida_per,
    });

    return apiResponse(res, dataPersona, 'Deleted', 'Persona');
  } catch (error) {
    return apiResponseError(res, error, 'Persona');
  }
};

export default deletePersona;
