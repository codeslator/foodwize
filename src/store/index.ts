import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import authSlice from './auth';
import uiSlice from './ui';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    ui: uiSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;