import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
import { isEmpty } from 'lodash';
import useAuth from '../utils/hooks/useAuth';

const defaultConfig: AxiosRequestConfig = {
  baseURL: `${import.meta.env.VITE_REACT_APP_URL}`,
  url: 'settings/',
  method: 'get',
  data: null,
  headers: {
    'x-api-key': `${import.meta.env.VITE_REACT_APP_APIKEY}`,
    'Content-Type': 'application/json'
  },
};

const useAxiosInterceptor = () => {
  const axiosInstance: AxiosInstance = axios.create(defaultConfig);
  const navigate = useNavigate();
  const { currentUser, refreshUser } = useAuth();

  useEffect(() => {
    const interceptor = axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
      return request;
    },
    (error: AxiosError) => {
      if(error.response?.status === 401) {
        if(isEmpty(currentUser.refreshToken && isEmpty(currentUser.user?.email))) {
          localStorage.clear();
          navigate('/login');
        }
        else {
          return refreshUser(currentUser.refreshToken, currentUser.user?.email);
        }
      }
    });

    return () => axiosInstance.interceptors.response.eject(interceptor);
  }, []);

  return {
    axiosInstance,
  };
};

export default useAxiosInterceptor;