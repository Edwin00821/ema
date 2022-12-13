import { NextApiResponse } from 'next';

const apiError = (res: NextApiResponse, error: any, endpoint: string) => {


  return res.status(500).json({ message: 'Internal server error' });
};

export default apiError;
