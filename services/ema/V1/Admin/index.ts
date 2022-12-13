import axios from 'axios';
import { IMAdmin, IMAdminRes } from 'interfaces/Entities';
import { BASE_URL_API } from 'libs/consts';
import { axiosError, axiosSuccess } from 'utils';
import { ResponseAdmin } from 'typings';

export const AdminService = {
  getAll: async (): Promise<ResponseAdmin> => {
    try {
      const ResponseAdm = await axios.get<IMAdminRes[]>(
        `${BASE_URL_API}/Admin`
      );
      return axiosSuccess(ResponseAdm, 'AdminService.getAll');
    } catch (error: any) {
      return axiosError(error, 'AdminService.getAll');
    }
  },
  searchById: async (id: number): Promise<ResponseAdmin> => {
    try {
      const Admin = await axios.get<IMAdminRes[]>(
        `${BASE_URL_API}/Admin/search/byId/${id}`
      );
      return axiosSuccess(Admin, 'AdminService.searchById');
    } catch (error: any) {
      return axiosError(error, 'AdminService.searchById');
    }
  },
  create: async (Admin: IMAdmin): Promise<ResponseAdmin> => {
    try {
      const ResponseAdm = await axios.post(`${BASE_URL_API}/Admin`, Admin);
      return axiosSuccess(ResponseAdm, 'AdminService.');
    } catch (error: any) {
      return axiosError(error, 'AdminService.');
    }
  },
  update: async (Admin: IMAdmin): Promise<ResponseAdmin> => {
    try {
      const ResponseAdm = await axios.put(`${BASE_URL_API}/Admin`, Admin);
      return axiosSuccess(ResponseAdm, 'AdminService.');
    } catch (error: any) {
      return axiosError(error, 'AdminService.');
    }
  },
  delete: async (Admin: IMAdmin): Promise<ResponseAdmin> => {
    try {
      const ResponseAdm = await axios.delete(`${BASE_URL_API}/Admin`, {
        data: Admin,
      });
      return axiosSuccess(ResponseAdm, 'AdminService.');
    } catch (error: any) {
      return axiosError(error, 'AdminService.');
    }
  },
};
