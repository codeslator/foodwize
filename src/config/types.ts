import { FC, LazyExoticComponent } from "react";

export type JSXComponent = () => JSX.Element;
export type LazyComponent = LazyExoticComponent<JSXComponent>;

export interface Route {
  to: string;
  path: string;
  Component: LazyComponent | JSXComponent | FC;
  name: string;
}