import { useAppSelector, useAppDispatch } from './';
import { selectAuthState } from '../../store/selectors';
import { REFRESH_TOKEN, SET_CURRENT_USER, LOGIN } from '../../store/auth';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const navigate = useNavigate();
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
    // TODO: Move validation to view
    if(isAuthenticated && currentUser) {
      navigate('/test', { replace: true })
    }
  };

  return {
    currentUser,
    setCurrentUser,
    refreshUser,
    login,
    isLoading,
    isAuthenticated,
  };
};

export default useAuth;