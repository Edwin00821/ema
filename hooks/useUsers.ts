import useSWR, { SWRConfiguration } from 'swr';
import { IDUser } from 'interfaces/Entities';
export const useUsers = (config: SWRConfiguration = {}) => {
  const { data, error } = useSWR<IDUser[]>('/admin/DUser', config);

  return {
    usersData: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};
