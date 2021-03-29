import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../modules/auth';
import axios from 'axios';

function LoginBar({ history }) {
	const dispatch = useDispatch(logout);
	const auth = useSelector((state) => state.auth);
	return (
		(auth.yes === 'yes' && (
			<div className='nav__login__container'>
				<span>{auth.data.nickname}</span>
				<div
					onClick={() => {
						axios
							.get('/user/logout')
							.then((res) => {
								if (res.data.resultCode === 'OK') {
									console.log('로그아웃 성공');
									dispatch(logout());
								}
							})
							.catch((error) =>
								console.log(error, '로그아웃에 실패했습니다.')
							);
					}}>
					logout
				</div>
			</div>
		)) ||
		(auth.yes !== 'yes' && (
			<div className='nav__login__container'>
				<div onClick={() => history.push('/login')}>login</div>
			</div>
		))
	);
}

export default withRouter(LoginBar);
