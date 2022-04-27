import { lazy } from 'react';

// Lazy views
export const TestView = lazy(() => import(/* webpackChunkName: "TestView" */ './TestView'));
export const Users = lazy(() => import(/* webpackChunkName: "TestView" */ './Users'));
export const FormView = lazy(() => import(/* webpackChunkName: "FormView" */ './FormView'));