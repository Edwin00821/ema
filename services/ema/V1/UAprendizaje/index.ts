import axios from 'axios';
import { ICUaprendizaje } from 'interfaces/Entities';
import { BASE_URL_API } from 'libs/consts';
import { axiosSuccess, axiosError } from 'utils';
import { ResponseUaprendizaje, AxiosResponsePPD, Message } from 'typings';

export const UAprendizajeService = {
  getAll: async (): Promise<ResponseUaprendizaje> => {
    try {
      const UA = await axios.get<ICUaprendizaje[]>(
        `${BASE_URL_API}/UAprendizaje`
      );
      return axiosSuccess(UA, 'UAprendizajeService.');
    } catch (error: any) {
      return axiosError(error, 'UAprendizajeService.getAll');
    }
  },
  searchById: async (id_ua: number) => {
    try {
      const UA = await axios.get<ICUaprendizaje[]>(
        `${BASE_URL_API}/UAprendizaje/search/byId/${id_ua}`
      );
      return axiosSuccess(UA, 'UAprendizajeService.searchById');
    } catch (error: any) {
      return axiosError(error, 'UAprendizajeService.searchById');
    }
  },
  searchBySemEsp: async (id_semesp: number): Promise<ResponseUaprendizaje> => {
    try {
      const UA = await axios.get<ICUaprendizaje[]>(
        `${BASE_URL_API}/UAprendizaje/search/bySemEsp/${id_semesp}`
      );
      return axiosSuccess(UA, 'UAprendizajeService.');
    } catch (error: any) {
      return axiosError(error, 'UAprendizajeService.searchBySemEsp');
    }
  },
  create: async (UAprendizaje: ICUaprendizaje): Promise<AxiosResponsePPD> => {
    try {
      const UA = await axios.post<Message>(
        `${BASE_URL_API}/UAprendizaje`,
        UAprendizaje
      );
      return axiosSuccess(UA, 'UAprendizajeService.');
    } catch (error: any) {
      return axiosError(error, 'UAprendizajeService.create');
    }
  },
  update: async (UAprendizaje: ICUaprendizaje): Promise<AxiosResponsePPD> => {
    try {
      const UA = await axios.put<Message>(
        `${BASE_URL_API}/UAprendizaje`,
        UAprendizaje
      );
      return axiosSuccess(UA, 'UAprendizajeService.');
    } catch (error: any) {
      return axiosError(error, 'UAprendizajeService.update');
    }
  },
  delete: async (UAprendizaje: ICUaprendizaje): Promise<AxiosResponsePPD> => {
    try {
      const UA = await axios.delete<Message>(`${BASE_URL_API}/UAprendizaje`, {
        data: UAprendizaje,
      });
      return axiosSuccess(UA, 'UAprendizajeService.');
    } catch (error: any) {
      return axiosError(error, 'UAprendizajeService.delete');
    }
  },
};
