import { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { JSXComponent, LazyComponent } from '../interfaces';

interface ProtectedRouteProps {
  isAllowed: boolean,
  redirectTo: string;
  children?: any;
}

export const ProtectedRoute = ({ isAllowed, redirectTo, children }: ProtectedRouteProps) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
}
