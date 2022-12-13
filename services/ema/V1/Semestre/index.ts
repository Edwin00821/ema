import axios from 'axios';
import { BASE_URL_API } from 'libs/consts';
import { ICSemestre } from 'interfaces/Entities';
import { axiosSuccess, axiosError } from 'utils';
import { ResponseSemestre, AxiosResponsePPD, Message } from 'typings';

export const SemestreService = {
  getAll: async (): Promise<ResponseSemestre> => {
    try {
      const ResponseSemestre = await axios.get<ICSemestre[]>(
        `${BASE_URL_API}/Semestre`
      );
      return axiosSuccess(ResponseSemestre, 'SemestreService');
    } catch (error: any) {
      return axiosError(error, 'SemestreService.');
    }
  },
  searchById: async (id: number): Promise<ResponseSemestre> => {
    try {
      const Semestre = await axios.get<ICSemestre[]>(
        `${BASE_URL_API}/Semestre/search/byId/${id}`
      );
      return axiosSuccess(Semestre, 'SemestreService.searchById');
    } catch (error: any) {
      return axiosError(error, 'SemestreService.searchById');
    }
  },
  create: async (Semestre: ICSemestre): Promise<AxiosResponsePPD> => {
    try {
      const ResponseSemestre = await axios.post<Message>(
        `${BASE_URL_API}/Semestre`,
        Semestre
      );
      return axiosSuccess(ResponseSemestre, 'SemestreService.');
    } catch (error: any) {
      return axiosError(error, 'SemestreService.');
    }
  },
  update: async (Semestre: ICSemestre): Promise<AxiosResponsePPD> => {
    try {
      const ResponseSemestre = await axios.put<Message>(
        `${BASE_URL_API}/Semestre`,
        Semestre
      );
      return axiosSuccess(ResponseSemestre, 'SemestreService.');
    } catch (error: any) {
      return axiosError(error, 'SemestreService.');
    }
  },
  delete: async (Semestre: ICSemestre): Promise<AxiosResponsePPD> => {
    try {
      const ResponseSemestre = await axios.delete<Message>(
        `${BASE_URL_API}/Semestre`,
        { data: Semestre }
      );
      return axiosSuccess(ResponseSemestre, 'SemestreService.');
    } catch (error: any) {
      return axiosError(error, 'SemestreService.');
    }
  },
};
