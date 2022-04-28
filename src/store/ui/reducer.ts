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

export const toggleSnackbar = (state: UIState) => {
  state.openSnackbar = !state.openSnackbar;
};