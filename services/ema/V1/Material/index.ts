import axios from 'axios';
import { IMMaterial } from 'interfaces/Entities';
import { BASE_URL_API } from 'libs/consts';
import { axiosSuccess, axiosError } from 'utils';
import { ResponseMaterial, AxiosResponsePPD, Message } from 'typings';

export const MaterialService = {
  getAll: async (): Promise<ResponseMaterial> => {
    return await axios
      .get<ResponseMaterial>(`${BASE_URL_API}/Material`)
      .then((ResMaterial) => axiosSuccess(ResMaterial, 'MaterialService.'))
      .catch((error) => axiosError(error, 'MaterialService'));
  },

  searchById: async (id: number): Promise<ResponseMaterial> => {
    try {
      const Material = await axios.get<IMMaterial[]>(
        `${BASE_URL_API}/Material/search/byId/${id}`
      );
      return axiosSuccess(Material, 'MaterialService.searchById');
    } catch (error: any) {
      return axiosError(error, 'MaterialService.searchById');
    }
  },
  searchByURL: async (url: string): Promise<ResponseMaterial> => {
    try {
      const Material = await axios.get<IMMaterial[]>(
        `${BASE_URL_API}/Material/search/byURL/${url}`
      );
      return axiosSuccess(Material, 'MaterialService.');
    } catch (error: any) {
      return axiosError(error, 'MaterialService.searchByURL');
    }
  },
  searchBySubtema: async (id_sub: number): Promise<ResponseMaterial> => {
    try {
      const Material = await axios.get<IMMaterial[]>(
        `${BASE_URL_API}/Material/search/bySubtema/${id_sub}`
      );
      return axiosSuccess(Material, 'MaterialService.searchBySub');
    } catch (error: any) {
      return axiosError(error, 'MaterialService.searchBySub');
    }
  },

  create: async (Material: IMMaterial): Promise<AxiosResponsePPD> => {
    try {
      const ResMaterial = await axios.post<Message>(
        `${BASE_URL_API}/Material`,
        Material
      );
      return axiosSuccess(ResMaterial, 'MaterialService.create');
    } catch (error: any) {
      return axiosError(error, 'MaterialService');
    }
  },
  update: async (Material: IMMaterial): Promise<AxiosResponsePPD> => {
    try {
      const ResMaterial = await axios.put<Message>(
        `${BASE_URL_API}/Material`,
        Material
      );
      return axiosSuccess(ResMaterial, 'MaterialService.update');
    } catch (error: any) {
      return axiosError(error, 'MaterialService');
    }
  },
  delete: async (Material: IMMaterial): Promise<AxiosResponsePPD> => {
    try {
      const ResMaterial = await axios.delete<Message>(
        `${BASE_URL_API}/Material`,
        { data: Material }
      );
      return axiosSuccess(ResMaterial, 'MaterialService.delete');
    } catch (error: any) {
      return axiosError(error, 'MaterialService.');
    }
  },
};
