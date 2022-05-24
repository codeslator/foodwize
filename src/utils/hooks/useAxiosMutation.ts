import { useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { AxiosConfig, ServerErrorResponse } from '../../config/interfaces';
import useConfig from './useConfig';
import { APP_MODE } from '../../config';
import { useSnackbar } from 'notistack';

type useAxiosMutationReturn<D> = [
  dispatch: (newConfig: AxiosConfig<D>) => void,
  state: {
    data: D | undefined;
    response: AxiosResponse<D, D> | undefined;
    loading: boolean;
    error: AxiosError<D, D> | Error | ServerErrorResponse | string | undefined;
  },
];

const useAxiosMutation = <D>(config: AxiosConfig<D>, logs = false): useAxiosMutationReturn<D> => {
  const { enqueueSnackbar } = useSnackbar();
  const [response, setResponse] = useState<AxiosResponse>();
  const [data, setData] = useState<D>();
  const [error, setError] = useState<AxiosError<D, D> | Error | ServerErrorResponse | string>();
  const [loading, setloading] = useState<boolean>(false);
  const { checkConfig } = useConfig();
  /**
   * @param {Object} newConfig Body of the request
   */
  const fetchData = async (newConfig: AxiosConfig<D>) => {
    config = { ...config, ...newConfig };
    const { event } = config;
    checkConfig(config);
    // logs the request in development only
    if (logs && (!APP_MODE || APP_MODE === 'development')) {
      console.log(config);
    }
    setloading(true);
    try {
      const axiosResponse = await axios.request(config);
      if (logs && (!APP_MODE || APP_MODE === 'development')) {
        console.log('Axios Response: ', axiosResponse);
        console.log('Data: ', axiosResponse.data);
      }
      setResponse(axiosResponse);
      setData(axiosResponse.data);
      if (event?.onSuccess) event?.onSuccess(axiosResponse);
    } catch (err: any) {
      enqueueSnackbar(err.message, {
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
      });
      // logs the error in development only
      if (logs && (!APP_MODE || APP_MODE === 'development')) {
        console.error(err);
      }
      setError(err);
      if (event?.onError) event?.onError(err);
    } finally {
      setloading(false);
      if (config.onFinally) {
        config.onFinally();
      }
      if (event?.onFinally) event?.onFinally();
    }
  };

  return [fetchData, { response, error, loading, data }];
};

export default useAxiosMutation;
