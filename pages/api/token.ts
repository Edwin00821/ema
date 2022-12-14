import { getToken } from 'next-auth/jwt';

const secret = process.env.JWT_SECRET_SEED;

export default async function handler(req, res) {
  await getToken({ req, secret }).then((token) => {
    console.log('XD', token);
    res.send(secret);
  });
}
