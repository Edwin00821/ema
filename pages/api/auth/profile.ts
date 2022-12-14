import { NextApiRequest, NextApiResponse } from 'next';
import { profile } from './application';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET': {
      return await profile(req, res);
    }

    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}
