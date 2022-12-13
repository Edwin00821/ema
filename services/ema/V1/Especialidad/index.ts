import axios from 'axios';
import { ICEspecialidad } from 'interfaces/Entities';
import { BASE_URL_API } from 'libs/consts';
import { axiosError, axiosSuccess } from 'utils';
import { ResponseEspecialidad, AxiosResponsePPD, Message } from 'typings';

export const EspecialidadService = {
  getAll: async (): Promise<ResponseEspecialidad> => {
    try {
      const ResponseEsp = await axios.get<ICEspecialidad[]>(
        `${BASE_URL_API}/Especialidad`
      );
      return axiosSuccess(ResponseEsp, 'EspecialidadService.getAll');
    } catch (error: any) {
      return axiosError(error, 'EspecialidadService.getAll');
    }
  },
  searchById: async (id: number): Promise<ResponseEspecialidad> => {
    try {
      const Especialidad = await axios.get<ICEspecialidad[]>(
        `${BASE_URL_API}/Especialidad/search/byId/${id}`
      );
      return axiosSuccess(Especialidad, 'EspecialidadService.searchById');
    } catch (error: any) {
      return axiosError(error, 'EspecialidadService.searchById');
    }
  },
  create: async (Especialidad: ICEspecialidad): Promise<AxiosResponsePPD> => {
    try {
      const ResponseEsp = await axios.post<Message>(
        `${BASE_URL_API}/Especialidad`,
        Especialidad
      );
      return axiosSuccess(ResponseEsp, 'EspecialidadService.');
    } catch (error: any) {
      return axiosError(error, 'EspecialidadService.');
    }
  },
  update: async (Especialidad: ICEspecialidad): Promise<AxiosResponsePPD> => {
    try {
      const ResponseEsp = await axios.put<Message>(
        `${BASE_URL_API}/Especialidad`,
        Especialidad
      );
      return axiosSuccess(ResponseEsp, 'EspecialidadService.');
    } catch (error: any) {
      return axiosError(error, 'EspecialidadService.');
    }
  },
  delete: async (Especialidad: ICEspecialidad): Promise<AxiosResponsePPD> => {
    try {
      const ResponseEsp = await axios.delete<Message>(
        `${BASE_URL_API}/Especialidad`,
        { data: Especialidad }
      );
      return axiosSuccess(ResponseEsp, 'EspecialidadService.');
    } catch (error: any) {
      return axiosError(error, 'EspecialidadService.');
    }
  },
};
