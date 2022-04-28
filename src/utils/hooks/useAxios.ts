import { useEffect, useState } from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import { AxiosConfig, ServerErrorResponse } from '../../config/interfaces';
import { useConfig } from './';
import useAxiosInterceptor from '../../config/useAxiosInterceptor';
import { APP_MODE } from '../../config/index';

const useAxios = <T extends Object>(config: AxiosConfig, logs: boolean = false) => {
  const [response, setResponse] = useState<AxiosResponse | ServerErrorResponse>(<AxiosResponse>{});
  const [data, setData] = useState<T>(<T>{});
  const [error, setError] = useState<AxiosError | Error | ServerErrorResponse>();
  const [loading, setLoading] = useState<boolean>(false);
  const { axiosInstance } = useAxiosInterceptor();
  const { checkConfig } = useConfig();

  const fetchData = async (newConfig?: AxiosConfig) => {
    if (newConfig) {
      config = newConfig;
    }
    // Check all configuration
    checkConfig(config);
    // logs the request in development only
    if (logs && (!APP_MODE || APP_MODE === 'development')) {
      console.log(config);
    }
    setLoading(true);
    try {
      const axiosResponse = await axiosInstance.request(config);
      if (logs && (!APP_MODE || APP_MODE === 'development')) {
        console.log('Axios Response: ', axiosResponse);
        console.log('Data: ', axiosResponse.data);
      }
      setResponse(axiosResponse);
      setData(axiosResponse.data);
    }
    catch (error: any) {
      if (logs && (!APP_MODE || APP_MODE === 'development')) {
        console.log('Error: ', error);
      }
      setError(error);
    }
    finally {
      setLoading(false);
    }
  }

  // calls the request function when any detail change
  useEffect(() => {
    if (config.url) {
      fetchData();
    }
  }, [config.method, config.url, config.data, config.headers]);

  return {
    response,
    data,
    error,
    loading,
    refetch: fetchData
  }
}

export default useAxios;