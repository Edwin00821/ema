import { NextApiRequest, NextApiResponse } from 'next';
import { MDUser } from 'models';
import { IDUser } from 'interfaces/Entities';
import { putUserOfDB } from 'database/Entities/DUser';
import { apiResponse, apiResponseError } from 'utils';
type Data = { message: string } | MDUser;

const putUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { correo_user, password_user, id_rol, id_per, valida_user }: IDUser =
  req.body;

  try {
    const dataUser = await putUserOfDB({
      correo_user,
      password_user,
      id_rol,
      id_per,
      valida_user,
    });
    return apiResponse(res, dataUser, 'Updated', 'User');
  } catch (error) {
    return apiResponseError(res, error, 'User');
  }
};

export default putUser;
