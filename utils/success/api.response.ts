import { NextApiResponse } from 'next';

export const apiResponse = <T>(
  res: NextApiResponse,
  data: T[],
  method: string,
  name: string
) => {
  console.log({ data });

  if (data.length === 0)
    return res.status(404).json({ message: `${name} not ${method}` });
  return res.status(200).json({ message: `${method} ${name}` });
};
