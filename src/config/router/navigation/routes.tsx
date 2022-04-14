import { RouteParent } from '../../types';
import { TestView, FormView } from '../../../views';
import { AuthLayout, AppLayout } from '../../../containers/layouts';

export const routes: RouteParent[] = [
  {
    path: '',
    Layout: AppLayout,
    children: [
      { to: 'test', path: 'test', Component: TestView },
      // { path: '*', Component: TestView },
      // { path: '*', Component: <Navigate to="/404" /> }
    ]
  },
  {
    path: 'auth',
    Layout: AuthLayout,
    children: [
      { to: 'login', path: 'login', Component: FormView },
      // { path: '*', Component: AuthLayout },
      // { path: '*', Component: <Navigate to="/404" /> }
    ]
  },
]