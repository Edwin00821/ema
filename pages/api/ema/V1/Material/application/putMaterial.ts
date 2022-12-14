import { NextApiRequest, NextApiResponse } from 'next';
import { MMMaterial } from 'models';
import { IMMaterial } from 'interfaces/Entities';
import { putMaterialOfDB } from 'database/Entities/CMaterial';
import { apiResponse, apiResponseError } from 'utils';

type Data = { message: string } | MMMaterial;

const putMaterial = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id_mat, url_mat, id_sub, valida_mat }: IMMaterial = req.body;

    const dataMaterial = await putMaterialOfDB({
      id_mat,
      url_mat,
      id_sub,
      valida_mat,
    });

    return apiResponse(res, dataMaterial, 'Updated', 'Inteligencia');
  } catch (error) {
    return apiResponseError(res, error, 'Inteligencia');
  }
};

export default putMaterial;
