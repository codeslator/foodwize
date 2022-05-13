import { UIError } from '../../config/interfaces';

export interface UIState {
  openDialog: boolean;
  openConfirm: boolean;
  openBackdrop: boolean;
  openDrawer: boolean;
  openSnackbar: boolean;
  error: UIError;
}

export const uiState: UIState = {
  openBackdrop: false,
  openDialog: false,
  openConfirm: false,
  openDrawer: false,
  openSnackbar: false,
  error: '',
};