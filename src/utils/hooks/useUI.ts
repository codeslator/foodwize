import { useAppSelector, useAppDispatch } from './index';
import { selectUIState } from '../../store/selectors';
import {
  TOGGLE_BACKDROP,
  TOGGLE_DRAWER,
  TOGGLE_DIALOG,
  TOGGLE_CONFIRM,
  TOGGLE_SNACKBAR,
} from "../../store/ui";

const useUI = () => {
  const { openDrawer, openBackdrop, openDialog, openSnackbar, openConfirm } = useAppSelector(selectUIState);
  const dispatch = useAppDispatch();

  const toggleDrawer = () => {
    dispatch(TOGGLE_DRAWER())
  };

  const toggleBackdrop = () => {
    dispatch(TOGGLE_BACKDROP());
  };

  const toggleDialog = () => {
    dispatch(TOGGLE_DIALOG());
  };

  const toggleConfirm = () => {
    dispatch(TOGGLE_CONFIRM());
  };

  const toggleSnackbar = () => {
    dispatch(TOGGLE_SNACKBAR());
  };

  return {
    openDrawer,
    openBackdrop,
    openDialog,
    openConfirm,
    openSnackbar,
    toggleDrawer,
    toggleBackdrop,
    toggleDialog,
    toggleConfirm,
    toggleSnackbar
  }
};

export default useUI;