import { NextApiRequest, NextApiResponse } from 'next';
import { MCTema } from 'models';
import { ICTema } from 'interfaces/Entities';
import { deleteTemaOfDB } from 'database/Entities/CTema';
import { apiResponse, apiResponseError } from 'utils';
type Data = { message: string } | MCTema;

const deleteTema = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id_tem, nombre_tem, id_par, id_ua, valida_tem }: ICTema = req.body;

    const dataTema = await deleteTemaOfDB({
      id_tem,
      nombre_tem,
      id_par,
      id_ua,
      valida_tem,
    });

    return apiResponse(res, dataTema, 'Deleted', 'Tema');
  } catch (error) {
    return apiResponseError(res, error, 'Tema');
  }
};

export default deleteTema;
