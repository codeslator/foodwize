import { FC, LazyExoticComponent } from 'react';
import { AxiosRequestConfig } from 'axios';

interface AxiosMutationConfig extends AxiosRequestConfig {
  onFinally?: () => void;
};

export type JSXComponent = () => JSX.Element;
export type LazyComponent = LazyExoticComponent<JSXComponent>;

export interface RouteParent {
  path?: string;
  Layout: LazyComponent | JSXComponent | FC;
  isIndex?: boolean;
  children: RouteChild[];
};

export interface RouteChild {
  to?: string;
  path: string;
  Component: LazyComponent | JSXComponent | FC;
};

export type AxiosConfig = AxiosMutationConfig;
