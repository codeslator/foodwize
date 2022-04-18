export interface UIState {
  openModal: boolean;
  openBackdrop: boolean;
  openDrawer: boolean;
};

export const uiState: UIState = {
  openBackdrop: false,
  openModal: false,
  openDrawer: false,
};