import { PayloadAction } from '@reduxjs/toolkit';
import { UIState } from './state';

export const toggleModal = (state: UIState) => {
  state.openModal = !state.openModal;
};

export const toggleBackdrop = (state: UIState) => {
  state.openBackdrop = !state.openBackdrop;
};

export const toggleDrawer = (state: UIState) => {
  state.openDrawer = !state.openDrawer;
};