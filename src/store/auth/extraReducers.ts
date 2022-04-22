import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosRequestConfig } from "axios";
// import { AuthActions } from './index';

interface RefreshTokenParams {
  refreshToken: string;
  email: string;
};

interface LoginParams {
  email: string;
  password: string;
}

export const refreshToken = createAsyncThunk('auth/refreshToken', async ({ refreshToken, email }: RefreshTokenParams) => {
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
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  }
  catch (error) {
    // TODO: Error handler
    console.error(error);

  };
});

export const login = createAsyncThunk('auth/login', async ({ email, password }: LoginParams) => {
  const config: AxiosRequestConfig = {
    method: 'post',
    url: `${process.env.REACT_APP_URL}/identities/auth`,
    headers: {
      'x-api-key': !!process.env.REACT_APP_APIKEY,
      'Content-Type': 'application/json',
    },
    data: { email, password },
  };
  try {
    const response = await axios.request(config);
    const loginData = response.data;
    return loginData;
  }
  catch (error) {
    console.error(error);
  }
});