import style from './Input.module.sass';
import { useState } from 'react';
import SocketApi from '../../api/socket-api';

export const Input = () => {
	// данные из input
	const [text, setText] = useState('');

	// отправка запроса
	const sendMessage = () => {
		SocketApi.socket?.emit('server-patch', { text });
	};
	// обработчик нажатий enter
	const EnterHandler = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			sendMessage();
		}
	};

	return (
		<div className={style.UnderCont}>
			<input
				className={style.UnderInput}
				type='text'
				placeholder='Сообщение...'
				onKeyDown={e => EnterHandler(e)}
				onChange={e => {
					setText(e.currentTarget.value);
				}}
			/>
			<button className={style.Btn} onClick={() => sendMessage()}>
				<svg
					width='27'
					height='23'
					viewBox='0 0 27 23'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M2.61918 2.67479L3.95453 10.2482H12.1938C12.8947 10.2482 13.4629 10.8087 13.4629 11.5C13.4629 12.1913 12.8947 12.7518 12.1938 12.7518H3.95453L2.61918 20.3252L23.4963 11.5L2.61918 2.67479ZM1.59894 11.5L0.0335915 2.62208C-0.0929541 1.90438 0.142493 1.17081 0.664734 0.655698C1.32092 0.00847598 2.3105 -0.179508 3.16346 0.181055L25.8421 9.76781C26.5445 10.0648 27 10.7461 27 11.5C27 12.2539 26.5445 12.9352 25.8421 13.2322L3.16346 22.8189C2.3105 23.1796 1.32092 22.9915 0.664734 22.3444C0.142493 21.8291 -0.0929545 21.0956 0.0335915 20.3779L1.59894 11.5Z'
						fill='#CDCDCD'
					/>
				</svg>
			</button>
		</div>
	);
};
