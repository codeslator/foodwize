import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { default as useUI } from './useUI';
export { default as useAuth } from './useAuth';
export { default as useAxios } from './useAxios';
export { default as useAxiosMutation } from './useAxiosMutation';
export { default as useConfig } from './useConfig';
export { default as useLocalStorage } from './useLocalStorage';
export { default as useUtils } from './useUtils';