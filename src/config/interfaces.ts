import { FC, LazyExoticComponent } from 'react';
import { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

interface AxiosMutationConfig<D> extends AxiosRequestConfig<D> {
  onFinally?: () => void;
  event?: {
    onSuccess?: (response: AxiosResponse<D, D>) => void;
    onError?: (error: AxiosError<D, D> | Error | ServerErrorResponse | string) => void;
    onFinally?: () => void;
  };
}

export type JSXComponent = () => JSX.Element;
export type LazyComponent = LazyExoticComponent<JSXComponent>;

export interface RouteChild {
  to?: string;
  path: string;
  Component: LazyComponent | JSXComponent | FC;
}

export interface RouteParent {
  path?: string;
  Layout: LazyComponent | JSXComponent | FC;
  children: RouteChild[];
}

export type AxiosConfig<D> = AxiosMutationConfig<D>;

export interface ServerErrorResponse {
  httpStatusCode: number;
  errorCode: number;
  errorMessage: string;
  cause: string;
}

export type UIError = Error | AxiosError | ServerErrorResponse | string;
