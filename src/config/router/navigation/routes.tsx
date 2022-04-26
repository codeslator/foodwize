import { RouteParent } from '../../interfaces';
import {
  TestView,
  SignInView,
  SignUpView,
  RecoverPasswordView
} from '../../../views';
import { AuthLayout, AppLayout } from '../../../containers/layouts';

export const routes: RouteParent[] = [
  {
    path: '',
    Layout: AuthLayout,
    // isIndex: true,
    children: [
      // { to: '', path: '', Component: SignInView },
      { to: 'login', path: 'login', Component: SignInView },
      { to: 'register', path: 'register', Component: SignUpView },
      { to: 'recover-password', path: 'recover-password', Component: RecoverPasswordView },
      // { path: '*', Component: AuthLayout },
      // { path: '*', Component: <Navigate to="/404" /> }
    ]
  },
  {
    path: '',
    Layout: AppLayout,
    children: [
      { to: 'test', path: 'test', Component: TestView },
      // { path: '*', Component: TestView },
      // { path: '*', Component: <Navigate to="/404" /> }
    ]
  },
]