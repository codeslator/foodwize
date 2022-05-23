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
  // window.clearToken = () => {
  //   const user = JSON.parse(localStorage.user);
  //   localStorage.setItem('user', JSON.stringify({ ...user, token: '' }));
  //   localStorage.setItem('persist:root', '');
  //   setCurrentUser({ token: '' });
  // };

  // TODO: Fix problem with typing of dispatch of AnyAction
  const refreshUser = (refreshToken: string, email: string) => {
    return dispatch<any>(REFRESH_TOKEN({ refreshToken, email })).unwrap();
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
