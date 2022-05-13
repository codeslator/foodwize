import { UIState } from './state';

export const toggleDialog = (state: UIState) => {
  state.openDialog = !state.openDialog;
};

export const toggleConfirm = (state: UIState) => {
  state.openConfirm = !state.openConfirm;
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