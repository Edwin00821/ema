import { IMEstudianteRes, IMAdminRes } from 'interfaces/Entities';
import { Session } from 'next-auth';

interface UserT {
  name?: string;
  email?: string;
  image?: string;
  data?: IMEstudianteRes | IMAdminRes;
  isNewUser?: boolean;
}

export const getUserSession = (session: Session) => {
  const user = session?.user as UserT;
  const data = user?.data;
  return data || null;
};
