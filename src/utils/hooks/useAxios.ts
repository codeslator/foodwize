import { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { AxiosConfig, ServerErrorResponse } from '../../config/interfaces';
import { useConfig } from '.';
import { APP_MODE } from '../../config';

const useAxios = <T>(config: AxiosConfig<T>, logs = false) => {
  const [response, setResponse] = useState<AxiosResponse | ServerErrorResponse>(<AxiosResponse>{});
  const [data, setData] = useState<T>();
  const [error, setError] = useState<AxiosError | Error | ServerErrorResponse>();
  const [loading, setLoading] = useState<boolean>(false);
  const { checkConfig } = useConfig();

  const fetchData = async (newConfig?: AxiosConfig<T>) => {
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
      const axiosResponse = await axios.request(config);
      if (logs && (!APP_MODE || APP_MODE === 'development')) {
        console.log('Axios Response: ', axiosResponse);
        console.log('Data: ', axiosResponse.data);
      }
      setResponse(axiosResponse);
      setData(axiosResponse.data);
    } catch (err: any) {
      if (logs && (!APP_MODE || APP_MODE === 'development')) {
        console.log('Error: ', err);
      }
      setError(err);
    } finally {
      setLoading(false);
    }
  };

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
    refetch: fetchData,
  };
};

export default useAxios;
