import { useAppSelector, useAppDispatch } from './index';
import { selectUIState } from '../../store/selectors';
import { TOGGLE_BACKDROP, TOGGLE_DRAWER, TOGGLE_MODAL, TOGGLE_SNACKBAR } from "../../store/ui";

const useUI = () => {
  const { openDrawer, openBackdrop, openModal, openSnackbar } = useAppSelector(selectUIState);
  const dispatch = useAppDispatch();

  const toggleDrawer = () => {
    dispatch(TOGGLE_DRAWER())
  };

  const toggleBackdrop = () => {
    dispatch(TOGGLE_BACKDROP());
  };

  const toggleModal = () => {
    dispatch(TOGGLE_MODAL());
  };

  const toggleSnackbar = () => {
    dispatch(TOGGLE_SNACKBAR());
  };

  return {
    openDrawer,
    openBackdrop,
    openModal,
    openSnackbar,
    toggleDrawer,
    toggleBackdrop,
    toggleModal,
    toggleSnackbar
  }
};

export default useUI;