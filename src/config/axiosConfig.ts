import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
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

const axiosInstance: AxiosInstance = axios.create(defaultConfig);

axiosInstance.interceptors.request.use((request) => {
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

export default axiosInstance;