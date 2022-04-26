import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authState, AuthState, UserAuthenticated } from './state';
import * as authReducer from './reducer';
import { login, refreshToken } from "./extraReducers";

export const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: authReducer,
  extraReducers: {
    [refreshToken.pending as any]: (state: AuthState) => {
      state.isLoading = true;
    },
    [refreshToken.fulfilled as any]: (state: AuthState, { payload }: PayloadAction<UserAuthenticated>) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.currentUser = payload;
    },
    [login.pending as any]: (state: AuthState) => {
      state.isLoading = true;
    },
    [login.fulfilled as any]: (state: AuthState, { payload }: PayloadAction<UserAuthenticated>) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.currentUser = payload;
    },
  }
});

export const {
  setCurrentUser: SET_CURRENT_USER,
} = authSlice.actions;
export {
  refreshToken as REFRESH_TOKEN,
  login as LOGIN,
} from "./extraReducers";
export default authSlice.reducer;