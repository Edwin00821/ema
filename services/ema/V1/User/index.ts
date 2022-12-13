import axios from 'axios';
import { BASE_URL_API } from 'libs/consts';
import { IDUser, IDUserReq, IDUserRes } from 'interfaces/Entities';
import { axiosSuccess, axiosError } from 'utils';
import { ResponseUser, AxiosResponsePPD, Message } from 'typings';

export const UsuarioService = {
  getAll: async (): Promise<ResponseUser> => {
    try {
      const ResponseUsuario = await axios.get<IDUserRes[]>(`${BASE_URL_API}/User`);

      return axiosSuccess(ResponseUsuario, 'UsuarioprendizajeService.');
    } catch (error: any) {
      return axiosError(error, 'UsuarioprendizajeService.getAll');
    }
  },
  searchByEmail: async (email: string): Promise<ResponseUser> => {
    try {
      const ResponseUsuario = await axios.get<IDUserRes[]>(
        `${BASE_URL_API}/User/search/byEmail/${email}`
      );
      return axiosSuccess(ResponseUsuario, 'UsuarioprendizajeService.');
    } catch (error: any) {
      return axiosError(error, 'UsuarioService.searchById');
    }
  },
  searchByRol: async (rol: string): Promise<ResponseUser> => {
    return await axios
      .get<IDUser[]>(`${BASE_URL_API}/User/search/byRol/${rol}`)
      .then((ResponseUsuario) =>
        axiosSuccess(ResponseUsuario, 'UsuarioprendizajeService.')
      )
      .catch((error) => axiosError(error, 'UsuarioService.searchById'));
  },
  create: async (Usuario: IDUser): Promise<AxiosResponsePPD> => {
    try {
      const ResponseUsuario = await axios.post<Message>(
        `${BASE_URL_API}/Usuario`,
        Usuario
      );
      return axiosSuccess(ResponseUsuario, 'UsuarioService.');
    } catch (error: any) {
      return axiosError(error, 'UsuarioService.');
    }
  },
  update: async (Usuario: IDUserReq): Promise<AxiosResponsePPD> => {
    try {
      const ResponseUsuario = await axios.put<Message>(
        `${BASE_URL_API}/User`,
        Usuario
      );
      return axiosSuccess(ResponseUsuario, 'UsuarioService.');
    } catch (error: any) {
      return axiosError(error, 'UsuarioService.');
    }
  },
  delete: async (User: IDUserReq): Promise<AxiosResponsePPD> => {
    try {
      const ResponseUsuario = await axios.delete<Message>(
        `${BASE_URL_API}/User`,
        { data: User }
      );
      return axiosSuccess(ResponseUsuario, 'UsuarioService.');
    } catch (error: any) {
      return axiosError(error, 'UsuarioService.delete');
    }
  },
  active: async (id: number): Promise<AxiosResponsePPD> => {
    try {
      const ResponseUsuario = await axios.delete<Message>(
        `${BASE_URL_API}/User/${id}`
      );
      return axiosSuccess(ResponseUsuario, 'UsuarioService.');
    } catch (error: any) {
      return axiosError(error, 'UsuarioService.delete');
    }
  },
};
