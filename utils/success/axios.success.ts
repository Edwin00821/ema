import type { AxiosResponse } from 'axios';

export const axiosSuccess = <T>(
  axiosResponse: AxiosResponse<T>,
  endpoint: string
) => {
  const { data } = axiosResponse;

  return { data };
};
