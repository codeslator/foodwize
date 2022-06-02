import { useState } from 'react';
import { AxiosError, AxiosResponse, AxiosInstance } from 'axios';
import { AxiosCustomConfig, AxiosMutationPayload, ServerErrorResponse } from '../../config/interfaces';
import useConfig from './useConfig';
import { APP_MODE } from '../../config';
import { foodwizeApi } from '../../config/useAxiosInterceptor';

type UseAxiosMutationReturn<T> = [
  dispatch: (newConfig: AxiosCustomConfig) => void,
  state: {
    data: T | undefined;
    response: AxiosResponse | undefined;
    loading: boolean;
    error: AxiosError | Error | ServerErrorResponse | string | undefined;
  },
];

const useAxiosMutation = <T>(config: AxiosCustomConfig, instance: AxiosInstance = foodwizeApi, logs = false): UseAxiosMutationReturn<T> => {
  // const { enqueueSnackbar } = useSnackbar();
  const [response, setResponse] = useState<AxiosResponse>();
  const [data, setData] = useState<T>();
  const [error, setError] = useState<AxiosError | Error | ServerErrorResponse | string>();
  const [loading, setloading] = useState<boolean>(false);
  const { checkConfig } = useConfig();
  /**
   * @param {Object} newConfig Body of the request
   */
  const fetchData = async (payload: AxiosMutationPayload, newConfig?: AxiosCustomConfig) => {
    const { onFinally, onSuccess, onError } = config;
    config = { ...config, ...newConfig };
    config.data = payload;
    checkConfig(config, instance);
    // logs the request in development only
    if (logs && (!APP_MODE || APP_MODE === 'development')) {
      console.log(config);
    }
    setloading(true);
    try {
      const axiosResponse = await instance.request(config);
      if (logs && (!APP_MODE || APP_MODE === 'development')) {
        console.log('Axios Response: ', axiosResponse);
        console.log('Data: ', axiosResponse.data);
      }
      setResponse(axiosResponse);
      setData(axiosResponse.data);
      if (onSuccess) onSuccess(axiosResponse);
    } catch (err: any) {
      // logs the error in development only
      if (logs && (!APP_MODE || APP_MODE === 'development')) {
        console.error(err);
      }
      setError(err);
      if (onError) onError(err);
    } finally {
      setloading(false);
      if (config.onFinally) {
        config.onFinally();
      }
      if (onFinally) onFinally();
    }
  };

  return [fetchData, { response, error, loading, data }];
};

export default useAxiosMutation;
