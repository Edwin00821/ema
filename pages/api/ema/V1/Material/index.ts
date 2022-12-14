import { NextApiRequest, NextApiResponse } from 'next';
import { deleteMaterial, getAllMateriales, putMaterial , postMaterial } from './application';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return await getAllMateriales(req, res);
    case 'POST':
      return await postMaterial(req, res);
    case 'PUT':
      return await putMaterial(req, res);
    case 'DELETE':
      return await deleteMaterial(req, res);
    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}
