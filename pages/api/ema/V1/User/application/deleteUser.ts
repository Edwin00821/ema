import { NextApiRequest, NextApiResponse } from 'next';
import { MDUser } from 'models';
import { IDUserReq } from 'interfaces/Entities';
import { deleteUserOfDB } from 'database/Entities/DUser';
import { apiResponse, apiResponseError } from 'utils';
type Data = { message: string } | MDUser;

const deleteUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { correo_user, valida_user }: IDUserReq = req.body;

    const dataUser = await deleteUserOfDB({
      correo_user,
      valida_user,
    });

    return apiResponse(res, dataUser, 'Deleted', 'User');
  } catch (error) {
    return apiResponseError(res, error, 'User');
  }
};

export default deleteUser;
