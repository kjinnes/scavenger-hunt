import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch, AppThunk } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppThunkDispatch = () => useDispatch<AppThunk>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;