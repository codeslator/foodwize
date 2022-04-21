import { useAppSelector, useAppDispatch } from './index';
import { selectUIState } from '../../store/ui/selectors';
import { TOGGLE_BACKDROP, TOGGLE_DRAWER, TOGGLE_MODAL } from "../../store/ui";

const useUI = () => {
  const { openDrawer, openBackdrop, openModal } = useAppSelector(selectUIState);
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

  return {
    openDrawer,
    openBackdrop,
    openModal,
    toggleDrawer,
    toggleBackdrop,
    toggleModal,
  }
};

export default useUI;