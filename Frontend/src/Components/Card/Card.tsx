import style from './Card.module.sass';
interface Props {
	id?: number;
	name?: string;
	text?: string;
}

export const Card = ({ id, name, text }: Props) => {
	// отрисовка сообщений
	return (
		<div className={style.Card} key={id}>
			<div className={style.photo}></div>
			<div className={style.contText}>
				<h4 className={style.name}>{name}</h4>
				<p className={style.text}>{text}</p>
			</div>
		</div>
	);
};
