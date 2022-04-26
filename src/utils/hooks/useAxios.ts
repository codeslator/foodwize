import { useEffect, useState } from 'react';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { AxiosConfig } from '../../config/interfaces';
import useConfig from './useConfig';
// import axiosInstance from '../../config/axiosConfig';
import useAxiosInterceptor from '../../config/axiosConfig';

/* const defaultConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_URL,
  url: 'settings/',
  method: 'get',
  data: null,
  headers: {
    'x-api-key': `${process.env.REACT_APP_APIKEY}`,
    'Content-Type': 'application/json'
  },
}; */
// const ENV = process.env.NODE_ENV;

const useAxios = <T>(config: AxiosConfig, logs: boolean = false) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [data, setData] = useState<T>();
  const [error, setError] = useState<AxiosError | Error>();
  const [loading, setLoading] = useState<boolean>(true);
  const { axiosInstance } = useAxiosInterceptor();
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
      const response = await axiosInstance.request(config);
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