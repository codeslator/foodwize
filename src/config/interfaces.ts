import { FC, LazyExoticComponent } from 'react';
import { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

export interface AxiosCustomConfig extends AxiosRequestConfig {
  onFinally?: () => void;
  onSuccess?: (response: AxiosResponse) => void;
  onError?: (error: AxiosError | Error | ServerErrorResponse | string) => void;
};

export interface AxiosMutationPayload {
  [key: string]: any;
}

export type JSXComponent = () => JSX.Element;
export type LazyComponent = LazyExoticComponent<JSXComponent>;

export interface RouteChild {
  to?: string;
  path: string;
  Component: LazyComponent | JSXComponent | FC;
  children?: RouteChild[];
}

export interface RouteParent {
  path?: string;
  Layout: LazyComponent | JSXComponent | FC;
  children: RouteChild[];
}

export interface ServerErrorResponse {
  httpStatusCode: number;
  errorCode: number;
  errorMessage: string;
  cause: string;
}

export type UIError = Error | AxiosError | ServerErrorResponse | string;
