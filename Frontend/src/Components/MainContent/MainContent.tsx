import { useAppSelector } from '../../hooks/redux.ts';
import { Card } from '../Card/Card.tsx';
import style from './MainContent.module.sass';

export const MainContent = () => {
	// получение данных из RTK
	const { message } = useAppSelector(state => state.userReducer);
	return (
		<div className={style.MainCont}>
			{
				// Перебор массива и вывод элементов
				message.map(el => {
					return <Card {...el} />;
				})
			}
		</div>
	);
};
