import { useAppSelector, useAppDispatch } from './';
import { selectAuthState } from '../../store/selectors';
import { REFRESH_TOKEN, SET_CURRENT_USER, LOGIN, LOGOUT } from '../../store/auth';

const useAuth = () => {
  const { currentUser, isLoading, isAuthenticated } = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();

  const setCurrentUser = (user: any) => {
    dispatch(SET_CURRENT_USER(user));
  };

  const refreshUser = (refreshToken: string, email: string) => {
    dispatch(REFRESH_TOKEN({ refreshToken, email }));
  };

  const login = async (email: string, password: string) => {
    await dispatch(LOGIN({ email, password }));
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
  };
};

export default useAuth;