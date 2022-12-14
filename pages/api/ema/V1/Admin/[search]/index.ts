import { NextApiRequest, NextApiResponse } from 'next';
import { searchByNumEmpleado } from '../application';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'GET') {
    const { search } = req.query;
    //   if (search === 'searchPersonaById') {
    //     return res.status(200).json({ String: search });
    //   }
    //   if (search === 'searchPersonaByName') {
    //     return res.status(200).json({ String: search });
    //   }
    if (search === 'searchByNumEmpleado') {
      return await searchByNumEmpleado(req, res);
    }
    return res.status(405).json({ message: 'Bad request' });
  } else {
    return res.status(405).json({ message: 'Bad request' });
  }
}
