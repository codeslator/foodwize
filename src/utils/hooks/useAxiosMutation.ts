import { useState } from 'react';
import { AxiosConfig } from '../../config/interfaces';
import axios, { AxiosError, AxiosResponse } from 'axios';
import useConfig from './useConfig';


const useAxiosMutation = <T>(config: AxiosConfig, logs: boolean = false) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [data, setData] = useState<T>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setloading] = useState<boolean>(false);
  const { checkConfig } = useConfig();

  /**
   * @param {Object} newConfig Body of the request
   */
  const fetchData = async (newConfig: AxiosConfig) => {
    config.data = newConfig;

    checkConfig(config);

    // logs the request in development only
    if (logs && (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')) {
      console.log(config);
    }

    setloading(true);

    try {
      const response = await axios.request(config);
      setData(response.data)
      // checks for error
      if (!res.errorMessage) {
      // logs the response in development only
        if (logs && (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')) {
          setResponse(res.data);
          console.log(res);
        }

      } else {
      // logs the error in development only
        if (logs && (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')) {
          console.error(res.errorMessage);
        }
        setError(!process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? res.errorMessage : 'Internal Error');
      }
    } catch (err) {
      // logs the error in development only
      if (logs && (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')) {
        console.error(err);
      }

      setError(!process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? err.message : 'Request Error');
    } finally {
      setloading(false);
      (config.onFinally) && config.onFinally();
    }
  };

  return [fetchData, { response, error, loading }];
};

export default useAxiosMutation;