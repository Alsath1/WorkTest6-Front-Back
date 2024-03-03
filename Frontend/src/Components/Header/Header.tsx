import style from './Header.module.sass';

export const Header = () => {
	return (
		<div className={style.headerMainCont}>
			<h2 className={style.headerName}>Дмитрий</h2>
			<h3 className={style.lastVisit}>last seen 45 min ago</h3>
			<span className={style.headerLine}></span>
		</div>
	);
};
