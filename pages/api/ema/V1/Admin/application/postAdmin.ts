import { NextApiRequest, NextApiResponse } from 'next';
import { MMAdmin } from 'models';
import { IMAdminReq } from 'interfaces/Entities';
import { postAdminOfDB } from 'database/Entities/MAdmin';
import { apiResponse, apiResponseError } from 'utils';

type Data = { message: string } | MMAdmin;

const postAdmin = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const Admin: IMAdminReq = req.body;

    const dataAdmin = await postAdminOfDB(Admin);

    return apiResponse(res, dataAdmin, 'Created', 'Admin');
  } catch (error) {
    return apiResponseError(res, error, 'Admin');
  }
};

export default postAdmin;
