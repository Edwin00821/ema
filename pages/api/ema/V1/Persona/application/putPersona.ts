import { NextApiRequest, NextApiResponse } from 'next';
import { MMPersona } from 'models';
import { IMPersona } from 'interfaces/Entities';
import { putPersonaOfDB } from 'database/Entities/MPersona';
import { apiResponse, apiResponseError } from 'utils';

type Data = { message: string } | MMPersona;

const putPersona = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
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

    const dataPersona = await putPersonaOfDB({
      id_per,
      nombre_per,
      appat_per,
      apmat_per,
      fecha_de_nacimiento_per,
      id_gen,
      id_int,
      valida_per,
    });

    return apiResponse(res, dataPersona, 'Updated', 'Persona');
  } catch (error) {
    return apiResponseError(res, error, 'Persona');
  }
};

export default putPersona;
