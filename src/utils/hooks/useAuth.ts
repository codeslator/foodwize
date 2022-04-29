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

  const refreshUser = (refreshToken: string, email: string) => {
    dispatch(REFRESH_TOKEN({ refreshToken, email }));
  };

  const login = (email: string, password: string) => {
    dispatch(LOGIN({ email, password }));
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