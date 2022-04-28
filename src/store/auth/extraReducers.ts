import { createAsyncThunk, thunkAPI } from "@reduxjs/toolkit";
import axios, { AxiosRequestConfig } from "axios";
import { FOODWIZE_APP_APIKEY, FOODWIZE_APP_URL } from "../../config";
// import { AuthActions } from './index';
interface RefreshTokenParams {
  refreshToken: string;
  email: string;
};

interface LoginParams {
  email: string;
  password: string;
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
      const user = {
        token: userRefreshed.token,
        refreshToken: userRefreshed.refreshToken,
        email,
      };
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    }
    catch (error: any) {
      if (error.response.data) {
        const errorResponse = JSON.parse(error.response.data.errorMessage);
        return rejectWithValue({
          message: errorResponse.error
        });
      }
      return rejectWithValue({
        message: error
      });
    };
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
    return loginData;
  }
  catch (error: any) {
    if (error.response.data) {
      const errorResponse = JSON.parse(error.response.data.errorMessage);
      return rejectWithValue({
        message: errorResponse.error
      });
    }
    return rejectWithValue({
      message: error
    });
  }
});