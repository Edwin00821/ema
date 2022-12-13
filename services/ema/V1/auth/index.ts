import { ICRol } from 'interfaces/Entities';
import axios from 'axios';
import { axiosError } from 'utils/errors';
import { ILogin } from 'interfaces/Auth';
import { AuthStudent, ResponseAuthStudent } from 'typings';

interface ILoginResponse {
  message: string;
  rol?: ICRol;
}
export const AuthService = {
  login: async (Auth: ILogin): Promise<any> => {
    try {
      const { correo_user, password_user, remember } = Auth;

      const { data, status } = await axios.post<any>('/api/auth/log', {
        correo: correo_user,
        password: password_user,
        remember,
      });

      return { status, response: data };
    } catch (error) {
      return axiosError(error, 'AuthService.login');
    }
  },
  getProfile: async (): Promise<any> => {
    try {
      const { data } = await axios.get<any>('/api/auth/profile');
      console.log({ data });

      return data;
    } catch (error) {
      console.log({ error });

      return axiosError(error, 'AuthService.login');
    }
  },
  registerStudent: async (Auth: AuthStudent): Promise<any> => {
    try {
      const { data } = await axios.post<any>(`api/auth/student`, Auth);
      return { status: 200, response: data };
    } catch (error) {
      return axiosError(error, 'registerStudent');
    }
  },
  registerAdmin: async (Auth: any) => {
    const { data } = await axios.post(`api/Auth/admin`, Auth);
    return data;
  },
};
