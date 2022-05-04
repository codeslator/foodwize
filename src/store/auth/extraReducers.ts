import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosRequestConfig } from "axios";
import { FOODWIZE_APP_APIKEY, FOODWIZE_APP_URL } from "../../config";

interface RefreshTokenParams {
  refreshToken: string;
  email: string;
}

interface LoginParams {
  email: string;
  password: string;
}

export interface IUserData {
  token: string;
  refreshToken: string;
  email: string;
  user?: object;
}

export const refreshToken = createAsyncThunk('auth/refreshToken',
  async ({ refreshToken, email }: RefreshTokenParams, { rejectWithValue }) => {
    const data = JSON.stringify({ refresh_token: refreshToken, email });
    const config: AxiosRequestConfig = {
      method: 'put',
      url: `${FOODWIZE_APP_URL}/identities/auth`,
      headers: {
        'x-api-key': FOODWIZE_APP_APIKEY,
        'Content-Type': 'application/json',
      },
      data,
    };
    try {
      const response = await axios.request(config);
      const userRefreshed = response.data;
      const user: IUserData = {
        token: userRefreshed.token,
        refreshToken: userRefreshed.refreshToken,
        email,
      };
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    }
    catch (err: any) {
      if (err.response.data) {
        const errorResponse = JSON.parse(err.response.data.errorMessage);
        return rejectWithValue({
          message: errorResponse.error
        });
      }
      return rejectWithValue({
        message: err
      });
    }
  });

export const logIn = createAsyncThunk('auth/logIn', async ({ email, password }: LoginParams, { rejectWithValue }) => {
  const config: AxiosRequestConfig = {
    method: 'post',
    url: `${FOODWIZE_APP_URL}/identities/auth`,
    headers: {
      'x-api-key': FOODWIZE_APP_APIKEY,
      'Content-Type': 'application/json',
    },
    data: { email, password },
  };
  try {
    const response = await axios.request(config);
    const loginData = response.data;
    const user: IUserData = {
      token: loginData.token,
      refreshToken: loginData.refreshToken,
      user: loginData.user,
      email,
    };
    localStorage.setItem('user', JSON.stringify(user));
    return loginData;
  }
  catch (err: any) {
    if (err.response.data) {
      const errorResponse = JSON.parse(err.response.data.errorMessage);
      return rejectWithValue({
        message: errorResponse.error
      });
    }
    return rejectWithValue({
      message: err
    });
  }
});