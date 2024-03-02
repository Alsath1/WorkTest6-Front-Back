import { useEffect } from 'react';
import SocketApi from 'src/api/socket-api';
import { useAppDispatch } from './redux';
import { userSlice } from 'src/store/reducers/UserSlice';

export const useConnectSocket = () => {
	// инициализация RTK
	const { setMessage } = userSlice.actions;
	const dispatch = useAppDispatch();
	// создание хука по инстенсу из api
	const connectSocket = () => {
		SocketApi.createConnection();
		// обработчик получения запроса
		SocketApi.socket?.on('client-path', data => {
			dispatch(setMessage(data.dto.text));
		});
	};

	useEffect(() => {
		connectSocket();
	}, []);
};
