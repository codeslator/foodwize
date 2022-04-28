import { useState } from 'react';
import { AxiosConfig, ServerErrorResponse } from '../../config/interfaces';
import axios, { AxiosError, AxiosResponse } from 'axios';
import useConfig from './useConfig';
import { APP_MODE } from '../../config/index';

const useAxiosMutation = <T extends Object>(config: AxiosConfig, logs: boolean = false) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [data, setData] = useState<T>();
  const [error, setError] = useState<AxiosError | Error | ServerErrorResponse | string>();
  const [loading, setloading] = useState<boolean>(false);
  const { checkConfig } = useConfig();

  /**
   * @param {Object} newConfig Body of the request
   */
  const fetchData = async (newConfig: AxiosConfig) => {
    config.data = newConfig;
    checkConfig(config);
    // logs the request in development only
    if (logs && (!APP_MODE || APP_MODE === 'development')) {
      console.log(config);
    }
    setloading(true);
    try {
      const axiosResponse = await axios.request(config);
      if (logs && (!APP_MODE || APP_MODE === 'development')) {
        console.log('Axios Response: ', axiosResponse);
        console.log('Data: ', axiosResponse.data);
      }
      setResponse(axiosResponse);
      setData(axiosResponse.data)
    } catch (error: any) {
      // logs the error in development only
      if (logs && (!APP_MODE || APP_MODE === 'development')) {
        console.error(error);
      }
      setError(error);
    } finally {
      setloading(false);
      (config.onFinally) && config.onFinally();
    }
  };

  return [fetchData, { response, error, loading, data }];
};

export default useAxiosMutation;