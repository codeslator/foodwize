import { RouteParent } from '../../interfaces';
import { TestView, SignInView, SignUpView, RecoverPasswordView, Users, Settings } from '../../../views';
import { AuthLayout, AppLayout } from '../../../containers/layouts';

export const routes: RouteParent[] = [
  {
    path: '',
    Layout: AuthLayout,
    children: [
      { to: 'login', path: 'login', Component: SignInView },
      { to: 'register', path: 'register', Component: SignUpView },
      { to: 'recover-password', path: 'recover-password', Component: RecoverPasswordView },
      // { path: '*', Component: AuthLayout },
      // { path: '*', Component: <Navigate to="/404" /> }
    ],
  },
  {
    path: '',
    Layout: AppLayout,
    children: [
      { to: 'test', path: 'test', Component: TestView },
      { to: 'users', path: 'users', Component: Users },
      { to: 'settings', path: 'settings', Component: Settings },
      { path: '*', Component: TestView },
      // { path: '*', Component: <Navigate to="/404" /> }
    ],
  },
];
