import { useAppSelector } from '../../hooks/redux.ts';
import style from './MainContent.module.sass';

export const MainContent = () => {
	// получение данных из RTK
	const { message } = useAppSelector(state => state.userReducer);
	return (
		<div className={style.MainCont}>
			{
				// Перебор массива и вывод элементов
				message.map(el => {
					return (
						<div className={style.Card} key={el.id}>
							<div className={style.photo}></div>
							<div className={style.contText}>
								<h4 className={style.name}>{el.name}</h4>
								<p className={style.text}>{el.text}</p>
							</div>
						</div>
					);
				})
			}
		</div>
	);
};
