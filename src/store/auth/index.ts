import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authState, AuthState, UserAuthenticated, UserNotAuthenticated } from './state';
import * as authReducer from './reducer';
import { logIn, refreshToken } from "./extraReducers";

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
    [logIn.pending as any]: (state: AuthState) => {
      state.error = '';
      state.isLoading = true;
    },
    [logIn.fulfilled as any]: (state: AuthState, { payload }: PayloadAction<UserAuthenticated>) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.currentUser = payload;
    },
    [logIn.rejected as any]: (state: AuthState, { payload }: PayloadAction<UserNotAuthenticated>) => {
      state.error = payload.message;
      state.isLoading = false;
    },
  }
});

export const {
  setCurrentUser: SET_CURRENT_USER,
  logOut: LOGOUT,
} = authSlice.actions;
export {
  refreshToken as REFRESH_TOKEN,
  logIn as LOGIN,
} from './extraReducers';
export default authSlice.reducer;