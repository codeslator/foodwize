import { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { AxiosConfig } from '../../config/interfaces';
import useConfig from './useConfig';

const defaultConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_URL,
  url: 'settings/',
  method: 'GET',
  data: null,
  headers: {
    'x-api-key': !!process.env.REACT_APP_APIKEY,
    'Content-Type': 'application/json'
  },
};

// const ENV = process.env.NODE_ENV;

const useAxios = <T>(config: AxiosConfig = defaultConfig, logs: boolean = false) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [data, setData] = useState<T>();
  const [error, setError] = useState<AxiosError | Error>();
  const [loading, setLoading] = useState<boolean>(true);
  const { checkConfig } = useConfig();

  const fetchData = async (newConfig?: AxiosConfig) => {
    if (newConfig) {
      config = newConfig;
    }
    // Check all configuration
    checkConfig(config);

    // logs the request in development only
    // if (logs && (!ENV || ENV === 'development')) {
    //   console.log(config);
    // }

    try {
      const response = await axios.request(config);
      // Check if exists a backend error
      // if (response)
      setResponse(response);
      setData(response.data);

    }
    catch (error: any) {
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