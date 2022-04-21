import { useAppSelector, useAppDispatch } from './';
import { selectAuthState } from '../../store/selectors';
import { SET_CURRENT_USER } from '../../store/auth';
import axios, { AxiosRequestConfig } from 'axios';

const useAuth = () => {
  const { currentUser } = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();

  const setCurrentUser = (user: any) => {
    dispatch(SET_CURRENT_USER(user));
  };

  const refreshUser = async (refreshToken: string, email: string) => {
    const data = JSON.stringify({ refresh_token: refreshToken, email });
    const config: AxiosRequestConfig = {
      method: 'put',
      url: `${process.env.REACT_APP_URL}/identities/auth`,
      headers: {
        'x-api-key': !!process.env.REACT_APP_APIKEY,
        'Content-Type': 'application/json',
      },
      data,
    };
    try {
      const response = await axios.request(config);
      const userRefreshed = response.data;
      const user = {
        token: userRefreshed.token,
        refresh_token: userRefreshed.refresh_token,
        email,
      };
      dispatch(SET_CURRENT_USER(user));
      localStorage.setItem('user', JSON.stringify(user));
    }
    catch (error) {
      // TODO: Error handler
      console.error(error);

    };
  };

  const login = async (email: string, password: string) => {

  }


  return {
    currentUser,
    setCurrentUser,
    refreshUser,
  };
};

export default useAuth;