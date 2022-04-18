import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import uiSlice from './ui'

export const store = configureStore({
  reducer: {
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