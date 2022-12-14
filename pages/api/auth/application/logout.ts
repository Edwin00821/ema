import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const profile = async (req: NextApiRequest, res: NextApiResponse) => {
  const { Authorization } = req.cookies;

  if (!Authorization) return res.status(401).json({ message: 'Not logged in' });
  try {
    const profile = jwt.verify(
      Authorization,
      process.env.JWT_SECRET_SEED 
    ) as jwt.JwtPayload;
    delete profile.exp;
    delete profile.iat;
    res.status(200).json({
      profile,
    });
  } catch (error) {
    res.status(401).end();
  }
};

export default profile;