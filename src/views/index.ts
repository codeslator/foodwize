import { lazy } from 'react';

// Lazy views
export const TestView = lazy(() => import(/* webpackChunkName: "TestView" */ './TestView'));
export const FormView = lazy(() => import(/* webpackChunkName: "FormView" */ './FormView'));