import axios from 'axios';
import { IMEstudiante, IMEstudianteRes } from 'interfaces/Entities';
import { BASE_URL_API } from 'libs/consts';
import { axiosError, axiosSuccess } from 'utils';
import { ResponseEstudiante, AxiosResponsePPD, Message } from 'typings';

export const EstudianteService = {
  getAll: async (): Promise<ResponseEstudiante> => {
    try {
      const ResponseEst = await axios.get<IMEstudianteRes[]>(
        `${BASE_URL_API}/Estudiante`
      );
      return axiosSuccess(ResponseEst, 'EstudianteService.getAll');
    } catch (error: any) {
      return axiosError(error, 'EstudianteService.getAll');
    }
  },
  searchByBoleta: async (boleta: string): Promise<ResponseEstudiante> => {
    try {
      const ResponseEstudiante = await axios.get<IMEstudianteRes[]>(
        `${BASE_URL_API}/Estudiante/search/byBoleta/${boleta}`
      );
      return axiosSuccess(ResponseEstudiante, 'EstudianteService');
    } catch (error: any) {
      return axiosError(error, 'EstudianteService.searchByBoleta');
    }
  },
  searchByEmail: async (email: string): Promise<ResponseEstudiante> => {
    try {
      const ResponseEstudiante = await axios.get<IMEstudianteRes[]>(
        `${BASE_URL_API}/Estudiante/search/byEmail/${email}`
      );
      return axiosSuccess(ResponseEstudiante, 'EstudianteService');
    } catch (error: any) {
      return axiosError(error, 'EstudianteService.searchByEmail');
    }
  },
  create: async (Estudiante: IMEstudiante): Promise<AxiosResponsePPD> => {
    try {
      const ResponseEst = await axios.post<Message>(
        `${BASE_URL_API}/Estudiante`,
        Estudiante
      );
      return axiosSuccess(ResponseEst, 'EstudianteService.');
    } catch (error: any) {
      return axiosError(error, 'EstudianteService.');
    }
  },
  update: async (Estudiante: IMEstudiante): Promise<AxiosResponsePPD> => {
    try {
      const ResponseEsp = await axios.put<Message>(
        `${BASE_URL_API}/Estudiante`,
        Estudiante
      );
      return axiosSuccess(ResponseEsp, 'EstudianteService.');
    } catch (error: any) {
      return axiosError(error, 'EstudianteService.');
    }
  },
  delete: async (Estudiante: IMEstudiante): Promise<AxiosResponsePPD> => {
    try {
      const ResponseEsp = await axios.delete<Message>(
        `${BASE_URL_API}/Estudiante`,
        { data: Estudiante }
      );
      return axiosSuccess(ResponseEsp, 'EstudianteService.');
    } catch (error: any) {
      return axiosError(error, 'EstudianteService.');
    }
  },
};
