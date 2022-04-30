import { lazy } from 'react';

// Lazy views
export const TestView = lazy(() => import(/* webpackChunkName: "TestView" */ './TestView'));
export const SignInView = lazy(() => import(/* webpackChunkName: "SignInView" */ './SignInView'));
export const SignUpView = lazy(() => import(/* webpackChunkName: "SignUpView" */ './SignUpView'));
export const RecoverPasswordView = lazy(() => import(/* webpackChunkName: "RecoverPasswordView" */ './RecoverPasswordView'));
export const Users = lazy(() => import(/* webpackChunkName: "Users" */ './Users'));

export const Settings = lazy(() => import(/* webpackChunkName: "Settings" */ './Settings'));
