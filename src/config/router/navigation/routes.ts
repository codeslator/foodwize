import { RouteParent } from '../../interfaces';
import {
  TestView,
  SignInView,
  SignUpView,
  RecoverPasswordView,
  Users,
  NotFoundView,
  RedirectToLoginView,
} from '../../../views';
import { AuthLayout, AppLayout } from '../../../containers/layouts';
import { ROUTES } from './index';

export const routes: RouteParent[] = [
  {
    path: ROUTES.ROOT,
    Layout: AuthLayout,
    children: [
      { path: ROUTES.LOGIN, Component: SignInView },
      { path: ROUTES.REGISTER, Component: SignUpView },
      { path: ROUTES.RECOVER_PASSWORD, Component: RecoverPasswordView },
      { path: ROUTES.ANY, Component: RedirectToLoginView },
    ],
  },
  {
    path: ROUTES.APP,
    Layout: AppLayout,
    children: [
      { path: ROUTES.HOME, Component: TestView },
      { path: ROUTES.STOCK, Component: TestView },
      { path: ROUTES.PRODUCTS, Component: TestView },
      { path: ROUTES.ANALYTICS, Component: TestView },
      { path: ROUTES.USERS, Component: Users },
      { path: ROUTES.ANY, Component: NotFoundView },
    ],
  },
];
