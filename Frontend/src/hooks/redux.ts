import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/store/store';
// hook для rtk
export const useAppDispatch = () => useDispatch<AppDispatch>();
// типизация hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
