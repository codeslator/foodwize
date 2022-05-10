import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { isEmpty } from 'lodash';
import { useAuth } from '../utils/hooks';
import { FOODWIZE_APP_URL, FOODWIZE_APP_APIKEY } from './index';

const defaultConfig: AxiosRequestConfig = {
  baseURL: FOODWIZE_APP_URL,
  url: 'settings/',
  method: 'get',
  data: null,
  headers: {
    'x-api-key': FOODWIZE_APP_APIKEY,
    'Content-Type': 'application/json',
  },
};

const useAxiosInterceptor = () => {
  const axiosInstance: AxiosInstance = axios.create(defaultConfig);
  const navigate = useNavigate();
  const { currentUser, refreshUser } = useAuth();

  useLayoutEffect(() => {
    
    const interceptor = axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        // console.log('Error intercepting')
        if (error.response?.status === 401) {
          
          if (isEmpty(currentUser.refreshToken) || isEmpty(currentUser.user?.email)) {
            // console.log('Error 401', currentUser)
            localStorage.clear();
            navigate('/login');
          } else {
            return refreshUser(currentUser.refreshToken, currentUser.user?.email, error.config);
          }
        }
        return Promise.reject(error);
      },
    );

    return () => axios.interceptors.response.eject(interceptor);
  }, []);

  return {
    axiosInstance,
  };
};

export default useAxiosInterceptor;
