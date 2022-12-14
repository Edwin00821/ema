import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { serialize } from 'cookie';

import { searchUserByEmailOfDB } from 'database/Entities/DUser';

import { searchEstudianteByEmailOfDB } from 'database/Entities/MEstudiante';
import { ICRol } from 'interfaces/Entities';
import searchAdminByEmailOfDB from 'database/Entities/MAdmin/search/searchAdminByEmailOfDB';

interface LoginResponse { message: string; rol?: ICRol }
const loginUser = async (
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse>
) => {
  const { correo, password, remember } = req.body;

  const [searchUser] = await searchUserByEmailOfDB(correo);


  if (!searchUser)
  return res.status(404).json({ message: 'Credenciales Invalidas' });
  const { rol } = searchUser;

  const validPassword = bcrypt.compareSync(password, searchUser.password_user );

  if (!validPassword)
    return res.status(404).json({ message: 'Credenciales Invalidas' });

  const searchStudent = await searchEstudianteByEmailOfDB(correo);

  const valideteStudent = searchStudent !== null ? searchStudent[0] : null;

  const searchAdmin = await searchAdminByEmailOfDB(correo);
  const valideteAdmin = searchAdmin !== null ? searchAdmin[0] : null;

  delete valideteStudent?.user.password_user;

  // filterStudent;

  const token = jwt.sign(
    {
      isLogued: true,
      ...valideteStudent,
      ...valideteAdmin,
      exp: remember
        ? Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7
        : Math.floor(Date.now() / 1000) + 60 * 5,
    },
    process.env.JWT_SECRET_SEED 
  );

  // const data = jwt.verify(token, process.env.JWT_SECRET_SEED);

  const serializedToken = serialize('Authorization', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: remember ? 60 * 60 * 24 * 7 : 60 * 5,
    path: '/',
  });



  res.setHeader('Set-Cookie', serializedToken);


  res.status(200).json({
    message: 'Login Success',
    rol: rol ,
  });
};

export default loginUser;
