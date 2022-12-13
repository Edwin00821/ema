import { NextApiResponse } from 'next';

export const apiResponseError = (
  res: NextApiResponse,
  error: any,
  endpoint: string
) => {
  return res.status(500).json({ message: 'Internal server error' });
};
