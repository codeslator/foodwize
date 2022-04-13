import { lazy } from 'react';


// Lazy views
export const TestView = lazy(() => import(/* webpackChunkName: "TestView" */ './TestView'));