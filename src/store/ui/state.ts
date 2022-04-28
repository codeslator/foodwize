import { UIError } from '../../config/interfaces';
export interface UIState {
  openModal: boolean;
  openBackdrop: boolean;
  openDrawer: boolean;
  openSnackbar: boolean;
  error: UIError;
};

export const uiState: UIState = {
  openBackdrop: false,
  openModal: false,
  openDrawer: false,
  openSnackbar: false,
  error: '',
};