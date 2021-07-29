import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import SearchBar from './func_button/SearchBar';
import Confirm from './func_button/Confirm';
import Setting from './func_button/Setting';
import logo from '../../images/anabada.svg';

function NavBar({ history }) {
	const [Left, setLeft] = useState('');
	const [Right, setRight] = useState('');

	useEffect(() => {
		let path = history.location.pathname.split('/')[1];
		switch (path) {
			case '':
				setLeft(logo);
				setRight(<SearchBar />);
				return;
			case 'content':
				setLeft('Content');
				setRight('');
				return;
			case 'ready':
				setLeft('준비중');
				setRight('');
				return;
			case 'write':
				setLeft('POST');
				setRight(<Confirm />);
				return;
			case 'chatting':
				setLeft('채팅');
				setRight('');
				return;
			case 'my':
				setLeft('마이페이지');
				setRight(<Setting />);
				return;
			case 'login':
				setLeft('Login');
				setRight('');
				return;
			case 'register':
				setLeft('Sign up');
				setRight('');
				return;
			default:
		}
	}, [history.location]);

	return (
		<div className='nav__container'>
			{Left == logo && <img id='nav__logo' src={logo} />}
			{Left !== logo && <div className='nav__title'>{Left}</div>}
			<div>{Right}</div>
		</div>
	);
}

export default withRouter(NavBar);
