// import { Navigate } from 'react-router-dom';
import AppLayout from '../../../containers/layouts/AppLayout';
import { RouteParent } from '../../types';
import { TestView } from '../../../views';

export const routes: RouteParent[] = [
  {
    path: '/',
    Layout: AppLayout,
    children: [
      { to: 'test', path: '/', Component: TestView },
      { path: '*', Component: TestView },
      // { path: '*', Component: <Navigate to="/404" /> }
    ]
  },
]