import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
import { isEmpty } from 'lodash';
import useAuth from '../utils/hooks/useAuth';
// import { store } from '../store';
// import { refreshToken } from '../store/auth/extraReducers';

const defaultConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_URL,
  url: 'settings/',
  method: 'get',
  data: null,
  headers: {
    'x-api-key': `${process.env.REACT_APP_APIKEY}`,
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
        if(isEmpty(currentUser.refreshToken && isEmpty(currentUser.user.email))) {
          localStorage.clear();
          navigate('/login');
        }
        else {
          return refreshUser(currentUser.refreshToken, currentUser.user.email);
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

/* axiosInstance.interceptors.request.use((request) => {
  // Edit request config
  return request;
}, (error) => {
  // const { currentUser } = store.getState().auth;
  // switch (error.message) {
  //   case 'Network Error':
  //     if (isEmpty(currentUser.refresh_token) || isEmpty(currentUser.email)) {
  //       localStorage.clear();
  //       window.location.href = '/login';
  //     }
  //     refreshToken({
  //       refreshToken: currentUser.refresh_token,
  //       email: currentUser.email
  //     });
  //     break;
  //   default:
  //     break;
  // }
  // console.log(error);
  
  return Promise.reject(error);
});

export default axiosInstance; */