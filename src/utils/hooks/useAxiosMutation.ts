import { useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { AxiosConfig, ServerErrorResponse } from '../../config/interfaces';
import useConfig from './useConfig';
import { APP_MODE } from '../../config';

const useAxiosMutation = <T>(config: AxiosConfig, logs = false) => {
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
    } catch (err: any) {
      // logs the error in development only
      if (logs && (!APP_MODE || APP_MODE === 'development')) {
        console.error(err);
      }
      setError(err);
    } finally {
      setloading(false);
      if (config.onFinally) {
        config.onFinally()
      }
    }
  };

  return [fetchData, { response, error, loading, data }];
};

export default useAxiosMutation;