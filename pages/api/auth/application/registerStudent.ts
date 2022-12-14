import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import {
  postPersonaOfDB,
  searchPersonaByApptAndApmatOfDB,
  searchUserByEmailOfDB,
  postUserOfDB,
  postEstudianteOfDB,
  searchEstudianteByBoletaOfDB,
  putUserOfDB,
} from 'database/Entities';

import { IRegisterStudent, IPersonalData } from 'interfaces/Auth';

interface Student extends IRegisterStudent, IPersonalData {}

interface Data {
  message: string;
}

const registerUser = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const {
      boleta_est,
      correo_user,
      password_user,
      id_rol = 2,
      id_sem,
      id_es,
      nombre_per,
      appat_per,
      apmat_per,
      fecha_de_nacimiento_per,
      id_gen,
      id_int,
      valida_per = 1,
      valida_user = 1,
      valida_est = 1,
    } = req.body as Student;

    const [persona] = await searchPersonaByApptAndApmatOfDB(
      appat_per,
      apmat_per
    );

    if (persona) return res.status(400).json({ message: 'Persona exists' });

    const [user] = await searchUserByEmailOfDB(correo_user);
    console.log({ user });

    if (user && user.persona.id_per !== 1)
      return res.status(400).json({ message: 'User exists' });

    const [student] = await searchEstudianteByBoletaOfDB(boleta_est);
    if (student) return res.status(400).json({ message: 'Student exists' });

    const salt = bcrypt.genSaltSync();
    const password_user_hash = bcrypt.hashSync(password_user, salt);
    const [newPersona] = await postPersonaOfDB({
      id_per: null,
      nombre_per,
      appat_per,
      apmat_per,
      fecha_de_nacimiento_per,
      id_gen,
      id_int,
      valida_per,
    });

    if (!newPersona)
      return res.status(400).json({ message: 'Error creating persona' });

    const { insertId } = newPersona;

    if (!user) {
      console.log(
        '-------------------------credentials-------------------------'
      );

      const [newUser] = await postUserOfDB({
        correo_user,
        password_user: password_user_hash,
        id_rol,
        id_per: insertId,
        valida_user,
      });
      if (!newUser)
        return res.status(400).json({ message: 'Error creating user' });
    }

    if (user && user.persona.id_per === 1) {
      const [updateUser] = await putUserOfDB({
        correo_user,
        password_user: password_user_hash,
        id_rol,
        id_per: insertId,
        valida_user,
      });
      if (!updateUser)
        return res.status(400).json({ message: 'Error updating user' });
    }

    const [newStudent] = await postEstudianteOfDB({
      boleta_est,
      correo_user,
      id_sem,
      id_es,
      valida_est,
    });

    if (!newStudent)
      return res.status(400).json({ message: 'Error creating student' });

    return res.status(200).json({ message: 'Registered Student' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};
export default registerUser;
