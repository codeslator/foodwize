import { useAppSelector, useAppDispatch } from '.';
import { selectAuthState } from '../../store/selectors';
import { REFRESH_TOKEN, SET_CURRENT_USER, LOGIN, LOGOUT } from '../../store/auth';
import { UserAuthenticated } from '../../store/auth/state';

const useAuth = () => {
  const { currentUser, isLoading, isAuthenticated, error } = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();

  const setCurrentUser = (user: UserAuthenticated) => {
    dispatch(SET_CURRENT_USER(user));
  };

  // TODO: Fix problem with typing of dispatch of AnyAction
  const refreshUser = (refreshToken: string, email: string) => {
    dispatch<any>(REFRESH_TOKEN({ refreshToken, email }));
  };

  const login = (email: string, password: string) => {
    dispatch<any>(LOGIN({ email, password }));
  };

  const logout = () => {
    dispatch(LOGOUT());
  };

  return {
    currentUser,
    setCurrentUser,
    refreshUser,
    login,
    logout,
    isLoading,
    isAuthenticated,
    error,
  };
};

export default useAuth;
