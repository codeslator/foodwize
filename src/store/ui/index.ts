import { createSlice } from "@reduxjs/toolkit";
import { uiState } from "./state";
import * as uiReducer from './reducer';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: uiState,
  reducers: uiReducer,
});

export const {
  toggleModal: TOGGLE_MODAL,
  toggleBackdrop: TOGGLE_BACKDROP,
  toggleDrawer: TOGGLE_DRAWER,
} = uiSlice.actions;
export default uiSlice.reducer;