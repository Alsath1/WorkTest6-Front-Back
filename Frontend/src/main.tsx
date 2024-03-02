import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.module.sass';
import { setupStore } from './store/store.ts';
import { Provider } from 'react-redux';

// конфигурация провайдера
const store = setupStore();
// стартовая точка приложения
// оборачивание приложение в Provider
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
