import { PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './state';

export const setCurrentUser = (state: AuthState, { payload }: PayloadAction<any>) => {
  state.currentUser = payload;
};
