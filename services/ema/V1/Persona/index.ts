import axios from 'axios';
import { BASE_URL_API } from 'libs/consts';
import { IMPersona, IMPersonaReq, IMPersonaRes } from 'interfaces/Entities';
import { axiosError, axiosSuccess } from 'utils';
import { ResponsePersona, AxiosResponsePPD, Message } from 'typings';

export const PersonaService = {
  getAll: async (): Promise<ResponsePersona> => {
    try {
      const ResPersona = await axios.get<IMPersonaRes[]>(
        `${BASE_URL_API}/Persona`
      );
      return axiosSuccess(ResPersona, 'PersonaService');
    } catch (error: any) {
      return axiosError(error, 'PersonaService.getAll');
    }
  },
  searchById: async (id: number): Promise<ResponsePersona> => {
    try {
      const ResPersona = await axios.get<IMPersonaRes[]>(
        `${BASE_URL_API}/Persona/search/byId/${id}`
      );
      return axiosSuccess(ResPersona, 'PersonaService');
    } catch (error: any) {
      return axiosError(error, 'PersonaService.searchById');
    }
  },
  searchByAppatAndApmat: async (
    appat: string,
    apmat: string
  ): Promise<ResponsePersona> => {
    try {
      const ResPersona = await axios.get<IMPersonaRes[]>(
        `${BASE_URL_API}/Persona/search/byAppatAndApmat/${appat}/${apmat}`
      );
      return axiosSuccess(ResPersona, 'PersonaService');
    } catch (error: any) {
      return axiosError(error, 'PersonaService.searchByAppatAndApmat');
    }
  },
  create: async (Persona: IMPersona): Promise<AxiosResponsePPD> => {
    try {
      const ResPersona = await axios.post<Message>(
        `${BASE_URL_API}/Persona`,
        Persona
      );
      return axiosSuccess(ResPersona, 'PersonaService');
    } catch (error: any) {
      return axiosError(error, 'PersonaService.create');
    }
  },
  update: async (Persona: IMPersonaReq): Promise<AxiosResponsePPD> => {
    try {
      const ResPersona = await axios.put<Message>(
        `${BASE_URL_API}/Persona`,
        Persona
      );
      return axiosSuccess(ResPersona, 'PersonaService');
    } catch (error: any) {
      return axiosError(error, 'PersonaService.update');
    }
  },
  delete: async (Persona: IMPersona): Promise<AxiosResponsePPD> => {
    try {
      const ResPersona = await axios.delete<Message>(
        `${BASE_URL_API}/Persona`,
        { data: Persona }
      );
      return axiosSuccess(ResPersona, 'PersonaService');
    } catch (error: any) {
      return axiosError(error, 'PersonaService.delete');
    }
  },
};
