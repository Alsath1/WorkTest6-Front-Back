import style from './App.module.sass';
import { Header } from './Components/Header/Header';
import { MainContent } from './Components/MainContent/MainContent';
import { Input } from './Components/Input/Input';
import { useConnectSocket } from './hooks/useConnectSocket';

const App = () => {
	useConnectSocket();
	// сборка приложения из частей

	// web socket используется и все сообщения сначала идут на сервер, а потом приходят обратно на фронт . В данном приложение RTK используется из-за отсутставия
	// возможности выложить тестовое задание вместе с БД.
	return (
		<div className={style.mainWindow}>
			<Header />
			<MainContent />
			<Input />
		</div>
	);
};

export default App;
