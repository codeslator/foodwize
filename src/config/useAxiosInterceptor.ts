import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse, AxiosInstance } from 'axios';
import { isEmpty } from 'lodash';
import { useAuth } from '../utils/hooks';
import { FOODWIZE_APP_URL, FOODWIZE_APP_APIKEY, FOODWIZE_STOCK_MANAGEMENT_API } from './index';

const FOODWIZE_API_CONFIG: AxiosRequestConfig = {
  baseURL: FOODWIZE_APP_URL,
  url: 'settings/',
  method: 'get',
  data: null,
  headers: {
    'x-api-key': FOODWIZE_APP_APIKEY,
    'Content-Type': 'application/json',
  },
};

const FOODWIZE_STOCK_API_CONFIG: AxiosRequestConfig = {
  baseURL: FOODWIZE_STOCK_MANAGEMENT_API,
  url: '/',
  method: 'get',
  data: null,
  headers: {},
};

export const foodwizeApi: AxiosInstance = axios.create(FOODWIZE_API_CONFIG);
export const foodwizeStockApi: AxiosInstance = axios.create(FOODWIZE_STOCK_API_CONFIG);

const useAxiosInterceptor = () => {
  const navigate = useNavigate();
  const { currentUser, refreshUser } = useAuth();

  useLayoutEffect(() => {
    const interceptor = foodwizeApi.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      async (error: AxiosError) => {
        const originalRequest: AxiosRequestConfig = error.config;
        if (error.response?.status === 401) {
          if (isEmpty(currentUser.refreshToken) || isEmpty(currentUser.user?.email)) {
            localStorage.clear();
            navigate('/login');
          } else {
            const { token } = await refreshUser(currentUser.refreshToken, currentUser.user?.email);
            originalRequest.headers = FOODWIZE_API_CONFIG.headers as {};
            originalRequest.headers.Authorization = token;
            if (originalRequest.headers.Authorization) return foodwizeApi(originalRequest);
          }
        }
        return Promise.reject(error);
      },
    );

    return () => foodwizeApi.interceptors.response.eject(interceptor);
  }, []);
};

export default useAxiosInterceptor;
