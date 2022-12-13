import axios from 'axios';
import { BASE_URL_API } from 'libs/consts';
import { ICTema } from 'interfaces/Entities';
import { axiosSuccess, axiosError } from 'utils';
import { ResponseTema, AxiosResponsePPD, Message } from 'typings';

export const TemaService = {
  getAll: async (): Promise<ResponseTema> => {
    try {
      const ResponseTema = await axios.get<ICTema[]>(`${BASE_URL_API}/Tema`);
      return axiosSuccess(ResponseTema, 'TemaService.getAll');
    } catch (error: any) {
      return axiosError(error, 'TemaService.getAll');
    }
  },
  searchById: async (id_tem: number): Promise<ResponseTema> => {
    try {
      const Tema = await axios.get<ICTema[]>(
        `${BASE_URL_API}/Tema/search/byId/${id_tem}`
      );
      return axiosSuccess(Tema, 'TemaService.searchById');
    } catch (error: any) {
      return axiosError(error, 'TemaService.searchById');
    }
  },
  searchByUA: async (id_ua: number): Promise<ResponseTema> => {
    try {
      const Tema = await axios.get<ICTema[]>(
        `${BASE_URL_API}/Tema/search/byUa/${id_ua}`
      );
      return axiosSuccess(Tema, 'TemaService.searchById');
    } catch (error: any) {
      return axiosError(error, 'TemaService.searchById');
    }
  },
  searchByParAndUa: async (
    id_par: number,
    id_ua: number
  ): Promise<ResponseTema> => {
    try {
      const Tema = await axios.get<ICTema[]>(
        `${BASE_URL_API}/Tema/search/byParAndUa/${id_par}/${id_ua}`
      );
      return axiosSuccess(Tema, 'TemaService.searchById');
    } catch (error: any) {
      return axiosError(error, 'TemaService.searchById');
    }
  },
  create: async (Tema: ICTema): Promise<AxiosResponsePPD> => {
    try {
      const ResponseTema = await axios.post<Message>(
        `${BASE_URL_API}/Tema`,
        Tema
      );
      return axiosSuccess(ResponseTema, 'TemaService.');
    } catch (error: any) {
      return axiosError(error, 'TemaService.');
    }
  },
  update: async (Tema: ICTema): Promise<AxiosResponsePPD> => {
    try {
      const ResponseTema = await axios.put<Message>(
        `${BASE_URL_API}/Tema`,
        Tema
      );
      return axiosSuccess(ResponseTema, 'TemaService.');
    } catch (error: any) {
      return axiosError(error, 'TemaService.');
    }
  },
  delete: async (Tema: ICTema): Promise<AxiosResponsePPD> => {
    try {
      const ResponseTema = await axios.delete<Message>(`${BASE_URL_API}/Tema`, {
        data: Tema,
      });
      return axiosSuccess(ResponseTema, 'TemaService.');
    } catch (error: any) {
      return axiosError(error, 'TemaService.');
    }
  },
};
