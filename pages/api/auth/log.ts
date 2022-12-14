import { NextApiRequest, NextApiResponse } from 'next';
import { login } from './application';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST': {
      return await login(req, res);
    }

    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}
