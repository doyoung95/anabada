import React from 'react';
import { useSelector } from 'react-redux';
import anabada_font from '../../images/anabada_font.svg';
import SearchBar from './func_button/SearchBar';
import Confirm from './func_button/Confirm';
import Setting from './func_button/Setting';

export default function NavBar() {
	const current_menu = useSelector((state) => state.current_menu);
	const title = [
		anabada_font,
		'준비중',
		'POST',
		'채팅',
		'마이페이지',
		'로그인',
		'회원가입',
	];
	const func = [<SearchBar />, '', <Confirm />, '', <Setting />, '', ''];

	return (
		<div className='nav__container'>
			{current_menu === 0 && <img alt='' id='nav__logo' src={title[0]} />}
			{current_menu !== 0 && (
				<div className='nav__title'>{title[current_menu]}</div>
			)}
			<div>{func[current_menu]}</div>
		</div>
	);
}
