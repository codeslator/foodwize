import { lazy } from 'react';

// Lazy views
export const TestView = lazy(() => import(/* webpackChunkName: "TestView" */ './TestView'));
export const SignInView = lazy(() => import(/* webpackChunkName: "SignInView" */ './SignInView'));
export const SignUpView = lazy(() => import(/* webpackChunkName: "SignUpView" */ './SignUpView'));
export const RecoverPasswordView = lazy(() => import(/* webpackChunkName: "RecoverPasswordView" */ './RecoverPasswordView'));
export const NotFoundView = lazy(() => import(/* webpackChunkName: "NotFoundView" */ './NotFoundView'));
export const RedirectToLoginView = lazy(() => import(/* webpackChunkName: "RedirectToLoginView" */ './RedirectToLoginView'));
export const Users = lazy(() => import(/* webpackChunkName: "Users" */ './Users'));
export const SuppliersView = lazy(() => import(/* webpackChunkName: "SuppliersView" */ './SuppliersView'));

export const SettingsView = lazy(() => import(/* webpackChunkName: "SettingsView" */ './SettingsView'));
