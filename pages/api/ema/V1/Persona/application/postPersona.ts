import { NextApiRequest, NextApiResponse } from 'next';
import { MMPersona } from 'models';
import { IMPersona } from 'interfaces/Entities';
import { postPersonaOfDB } from 'database/Entities/MPersona';
import { apiResponse, apiResponseError } from 'utils';

const postPersona = async (req: NextApiRequest, res: NextApiResponse<any>) => {
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

    const dataPersona = await postPersonaOfDB({
      id_per,
      nombre_per,
      appat_per,
      apmat_per,
      fecha_de_nacimiento_per,
      id_gen,
      id_int,
      valida_per,
    });

    return apiResponse(res, dataPersona, 'Created', 'Persona');
  } catch (error) {
    return apiResponseError(res, error, 'Persona');
  }
};

export default postPersona;
