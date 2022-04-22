import { RouteParent } from '../../interfaces';
import { TestView, FormView } from '../../../views';
import { AuthLayout, AppLayout } from '../../../containers/layouts';

export const routes: RouteParent[] = [
  {
    path: '/',
    Layout: AuthLayout,
    children: [
      { to: '', path: '', Component: FormView },
      { to: 'login', path: 'login', Component: FormView },
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