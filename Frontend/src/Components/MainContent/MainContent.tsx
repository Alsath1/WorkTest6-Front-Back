import { useAppSelector } from 'src/hooks/redux';
import style from './MainContent.module.sass';

export const MainContent = () => {
	// получение данных из RTK
	const { message } = useAppSelector(state => state.userReducer);
	return (
		<div className={style.MainCont}>
			{message.length > 0 ? (
				// Перебор массива и вывод элементов
				message?.map(el => {
					return (
						<div className={style.Card} key={el.id}>
							<div className={style.photo}></div>
							<div className={style.contText}>
								<div className={style.name}>{el.name}</div>
								<div className={style.text}>{el.text}</div>
							</div>
						</div>
					);
				})
			) : (
				<></>
			)}
		</div>
	);
};
