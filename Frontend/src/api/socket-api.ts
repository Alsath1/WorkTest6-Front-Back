import io, { Socket } from 'socket.io-client';

// создание класса для hook
class SocketApi {
	static socket: null | Socket = null;

	static createConnection() {
		// создание подключения
		this.socket = io('http://localhost:3000/');

		// обработка подключения
		this.socket.on('connect', () => {
			console.log('connect');
		});
		// обработка отключения
		this.socket.on('disconnect', () => {
			console.log('disconnect');
		});
	}
}

export default SocketApi;
