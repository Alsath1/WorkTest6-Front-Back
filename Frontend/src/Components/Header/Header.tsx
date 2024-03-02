import style from './Header.module.sass';

export const Header = () => {
	return (
		<div className={style.headerMainCont}>
			<div className={style.headerName}>Дмитрий</div>
			<div className={style.lastVisit}>last seen 45 min ago</div>
			<span className={style.headerLine}></span>
		</div>
	);
};
