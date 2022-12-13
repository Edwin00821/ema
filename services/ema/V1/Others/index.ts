import axios from 'axios';
import { BASE_URL_API } from 'libs/consts';
import { axiosSuccess, axiosError } from 'utils';

export const ShowTablesService = {
  getAll: async (): Promise<any> => {
    try {
      const ResTables = await axios.get(`${BASE_URL_API}/ShowTables`);
      return axiosSuccess(ResTables, 'ShowTablesService.getAll');
    } catch (error: any) {
      return axiosError(error, 'ShowTablesService.getAll');
    }
  },
};
