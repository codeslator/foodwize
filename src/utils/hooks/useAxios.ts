import { useEffect, useState } from 'react';
import { AxiosError, AxiosResponse, AxiosInstance } from 'axios';
import { AxiosCustomConfig, ServerErrorResponse } from '../../config/interfaces';
import { useConfig } from '.';
import { APP_MODE } from '../../config';
import { foodwizeApi } from '../../config/useAxiosInterceptor';

type UseAxiosReturn<T> = [
  dispatch: (config?: AxiosCustomConfig) => void,
  state: {
    data: T | undefined;
    response: AxiosResponse | undefined;
    loading: boolean;
    error: AxiosError | Error | ServerErrorResponse | string | undefined;
  },
];

const useAxios = <T>(config: AxiosCustomConfig, instance: AxiosInstance = foodwizeApi, logs = false): UseAxiosReturn<T> => {
  const [response, setResponse] = useState<AxiosResponse>(<AxiosResponse>{});
  const [data, setData] = useState<T>();
  const [error, setError] = useState<AxiosError | Error | ServerErrorResponse>();
  const [loading, setLoading] = useState<boolean>(false);
  const { checkConfig } = useConfig();

  const refetch = async (newConfig?: AxiosCustomConfig) => {
    const { onSuccess, onError, onFinally } = config;
    if (newConfig) {
      config = newConfig;
    }
    // Check all configuration
    checkConfig(config, instance);
    // logs the request in development only
    if (logs && (!APP_MODE || APP_MODE === 'development')) {
      console.log(config);
    }
    setLoading(true);
    try {
      const axiosResponse = await instance.request(config);
      if (logs && (!APP_MODE || APP_MODE === 'development')) {
        console.log('Axios Response: ', axiosResponse);
        console.log('Data: ', axiosResponse.data);
      }
      setResponse(axiosResponse);
      setData(axiosResponse.data);
      if (onSuccess) onSuccess(axiosResponse);
    } catch (err: any) {
      if (logs && (!APP_MODE || APP_MODE === 'development')) {
        console.log('Error: ', err);
      }
      setError(err);
      if (onError) onError(err);
    } finally {
      setLoading(false);
      if (onFinally) onFinally();
    }
  };

  // calls the request function when any detail change
  useEffect(() => {
    if (config.url) {
      refetch();
    }
  }, [config.method, config.url, config.data, config.headers, config.baseURL]);

  return [refetch, { data, response, error, loading }]
};

export default useAxios;
