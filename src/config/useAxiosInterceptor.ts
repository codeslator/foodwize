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
        const originalRequest: AxiosRequestConfig = error.config;
        if (error.response?.status === 401) {
          if (isEmpty(currentUser.refreshToken) || isEmpty(currentUser.user?.email)) {
            localStorage.clear();
            navigate('/login');
          } else {
            console.log(currentUser.token)
            return refreshUser(currentUser.refreshToken, currentUser.user?.email, originalRequest);
            // if(originalRequest.headers) {
            //   originalRequest.headers.Authorization = currentUser.token;
            //   // return axiosInstance(originalRequest);
            //   // return 
            // }
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
