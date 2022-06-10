import { lazy } from 'react';

// Lazy views
export const TestView = lazy(() => import(/* webpackChunkName: "TestView" */ './TestView'));
export const SignInView = lazy(() => import(/* webpackChunkName: "SignInView" */ './SignInView'));
export const SignUpView = lazy(() => import(/* webpackChunkName: "SignUpView" */ './SignUpView'));
export const RecoverPasswordView = lazy(
  () => import(/* webpackChunkName: "RecoverPasswordView" */ './RecoverPasswordView'),
);
export const NotFoundView = lazy(() => import(/* webpackChunkName: "NotFoundView" */ './NotFoundView'));
export const RedirectToLoginView = lazy(
  () => import(/* webpackChunkName: "RedirectToLoginView" */ './RedirectToLoginView'),
);
export const UsersView = lazy(() => import(/* webpackChunkName: "UsersView */ './users/UsersView'));
export const EditUserView = lazy(() => import(/* webpackChunkName: "EditUserView" */ './users/EditUserView'));
export const SuppliersView = lazy(() => import(/* webpackChunkName: "SuppliersView" */ './suppliers/SuppliersView'));
export const OrderDetailsView = lazy(
  () => import(/* webpackChunkName: "OrderDetailsView" */ './suppliers/OrderDetailsView'),
);
export const StockView = lazy(() => import(/* webpackChunkName: "StockView" */ './stock/StockView'));

export const SettingsView = lazy(() => import(/* webpackChunkName: "SettingsView" */ './SettingsView'));
