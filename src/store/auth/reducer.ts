import { PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './state';

export const setCurrentUser = (state: AuthState, { payload }: PayloadAction<any>) => {
  state.currentUser = payload;
};

export const logOut = (state: AuthState) => {
  state.currentUser = {
    token: '',
    refreshToken: '',
    user: null,
  };
  state.isAuthenticated = false;
  state.isLoading = false;
};