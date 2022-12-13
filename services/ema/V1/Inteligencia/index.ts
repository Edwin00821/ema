import axios from 'axios';
import { ICInteligencia } from 'interfaces/Entities';
import { BASE_URL_API } from 'libs/consts';
import { axiosSuccess, axiosError } from 'utils';
import { ResponseInteligencia, AxiosResponsePPD, Message } from 'typings';

export const InteligenciaService = {
  getAll: async (): Promise<ResponseInteligencia> => {
    try {
      const ResInteligencia = await axios.get<ICInteligencia[]>(
        `${BASE_URL_API}/Inteligencia`
      );
      return axiosSuccess(ResInteligencia, 'InteligenciaService');
    } catch (error: any) {
      return axiosError(error, 'InteligenciaService.');
    }
  },
  searchById: async (id: number): Promise<ResponseInteligencia> => {
    try {
      const Inteligencia = await axios.get<ICInteligencia[]>(
        `${BASE_URL_API}/Inteligencia/search/byId/${id}`
      );
      return axiosSuccess(Inteligencia, 'InteligenciaService.');
    } catch (error: any) {
      return axiosError(error, 'InteligenciaService.searchById');
    }
  },
  create: async (Inteligencia: ICInteligencia): Promise<AxiosResponsePPD> => {
    try {
      const ResInteligencia = await axios.post<Message>(
        `${BASE_URL_API}/Inteligencia`,
        Inteligencia
      );
      return axiosSuccess(ResInteligencia, 'InteligenciaService');
    } catch (error: any) {
      return axiosError(error, 'InteligenciaService.');
    }
  },
  update: async (Inteligencia: ICInteligencia): Promise<AxiosResponsePPD> => {
    try {
      const ResInteligencia = await axios.put<Message>(
        `${BASE_URL_API}/Inteligencia`,
        Inteligencia
      );
      return axiosSuccess(ResInteligencia, 'InteligenciaService');
    } catch (error: any) {
      return axiosError(error, 'InteligenciaService.');
    }
  },
  delete: async (Inteligencia: ICInteligencia): Promise<AxiosResponsePPD> => {
    try {
      const ResponseInteligencia = await axios.delete<Message>(
        `${BASE_URL_API}/Inteligencia`,
        { data: Inteligencia }
      );
      return axiosSuccess(ResponseInteligencia, 'InteligenciaService.delete');
    } catch (error: any) {
      return axiosError(error, 'InteligenciaService');
    }
  },
};
