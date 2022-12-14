import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import jwt from 'jsonwebtoken';

const profile = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  console.log('-------------------------profile-------------------------');
  console.log({ session });

  if (!session) return res.status(401).json({ message: 'Not logged in' });
  try {
    // const profile = jwt.verify(
    //   session,
    //   process.env.JWT_SECRET_SEED
    // ) as jwt.JwtPayload;
    // delete profile.exp;
    // delete profile.iat;

    res.status(200).json({
      ...session,
    });
  } catch (error) {
    res.status(401).end();
  }
};

export default profile;
