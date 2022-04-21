import { createSlice } from "@reduxjs/toolkit";
import { authState } from "./state";
import * as authReducer from './reducer';

export const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: authReducer,
});

export const {
  setCurrentUser: SET_CURRENT_USER,
} = authSlice.actions;
export default authSlice.reducer;