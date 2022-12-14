import { NextApiRequest, NextApiResponse } from 'next';
import { MCTema } from 'models';
import { ICTema } from 'interfaces/Entities';
import { putTemaOfDB } from 'database/Entities/CTema';
import { apiResponse, apiResponseError } from 'utils';
type Data = { message: string } | MCTema;

const putTema = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const {
      id_tem,
      nombre_tem,
      parcial,
      unidad_aprendizaje,
      valida_tem,
    }: ICTema = req.body;

    const dataTema = await putTemaOfDB({
      id_tem,
      nombre_tem,
      valida_tem,
    });

    return apiResponse(res, dataTema, 'Updated', 'Tema');
  } catch (error) {
    return apiResponseError(res, error, 'Tema');
  }
};

export default putTema;
