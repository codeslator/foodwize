import { useAppSelector, useAppDispatch } from './';
import { selectAuthState } from '../../store/selectors';
import { REFRESH_TOKEN, SET_CURRENT_USER, LOGIN } from '../../store/auth';

const useAuth = () => {
  const { currentUser } = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();

  const setCurrentUser = (user: any) => {
    dispatch(SET_CURRENT_USER(user));
  };

  const refreshUser = (refreshToken: string, email: string) => {
    dispatch(REFRESH_TOKEN({ refreshToken, email }));
  };

  const login = (email: string, password: string) => {
    dispatch(LOGIN({ email, password }));
  };


  return {
    currentUser,
    setCurrentUser,
    refreshUser,
    login,
  };
};

export default useAuth;