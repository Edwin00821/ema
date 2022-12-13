import { NextApiResponse } from 'next';

export const apiSuccess = <T>(
  res: NextApiResponse,
  data: T[],
  name: string
) => {
  if (data.length === 0)
    return res.status(404).json({ message: `${name} not found` });

  return res.status(200).json(data);
};
