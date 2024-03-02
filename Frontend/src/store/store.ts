import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/UserSlice';
const rootReducer = combineReducers({
	userReducer
});
// конфигурация главного store
export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	});
};
// типизация кастомных hook
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
