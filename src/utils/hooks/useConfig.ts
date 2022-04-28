import { FOODWIZE_APP_APIKEY, FOODWIZE_APP_URL } from '../../config';
import { AxiosConfig } from '../../config/interfaces';
import { store } from '../../store';

const useConfig = () => {
  const checkConfig = (config: AxiosConfig) => {
    // parses headers and data if they are stringyfied
    if (config.data && typeof config.data === 'string') {
      config.data = JSON.parse(config.data);
    }
    if (config.headers && typeof config.headers === 'string') {
      config.headers = JSON.parse(config.headers);
    }

    // checks for missing info in the request
    if (!config.baseURL) {
      config.baseURL = FOODWIZE_APP_URL;
    }

    if (!config.method) {
      config.method = 'get';
    }

    if (!config.headers) {
      config.headers = {};
    }

    if (!config.headers.Authorization) {
      const { currentUser } = store.getState().auth;
      config.headers.Authorization = currentUser.token;
    }
    if (!config.headers['x-api-key']) {
      config.headers['x-api-key'] = FOODWIZE_APP_APIKEY;
    }
    if (!config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json';
    }
  };

  return {
    checkConfig,
  };
};

export default useConfig;