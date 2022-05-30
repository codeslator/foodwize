import { AxiosInstance } from 'axios';
import { FOODWIZE_APP_APIKEY, FOODWIZE_APP_URL } from '../../config';
import { AxiosCustomConfig } from '../../config/interfaces';
import { store } from '../../store';

const useConfig = () => {
  const checkConfig = (config: AxiosCustomConfig, instance: AxiosInstance) => {
    // parses headers and data if they are stringyfied
    if (config.data && typeof config.data === 'string') {
      config.data = JSON.parse(config.data);
    }
    if (config.headers && typeof config.headers === 'string') {
      config.headers = JSON.parse(config.headers);
    }

    // checks for missing info in the request
    if (!config.baseURL) {
      config.baseURL = instance.defaults.baseURL;
    }

    if (!config.method) {
      config.method = 'get';
    }

    if (!config.headers) {
      config.headers = {};
    }

    if (!config.headers.Authorization && instance.defaults.baseURL === FOODWIZE_APP_URL) {
      const { currentUser } = store.getState().auth;
      config.headers.Authorization = currentUser.token;
    }
    if (!config.headers['x-api-key'] && instance.defaults.baseURL === FOODWIZE_APP_URL) {
      config.headers['x-api-key'] = FOODWIZE_APP_APIKEY;
    }
    if (!config.headers['Content-Type'] && instance.defaults.baseURL === FOODWIZE_APP_URL) {
      config.headers['Content-Type'] = 'application/json';
    }
  };

  return {
    checkConfig,
  };
};

export default useConfig;