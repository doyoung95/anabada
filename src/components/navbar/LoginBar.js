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
			<div className='nav_login_container'>
				{auth.data.nickname}님 환영합니다.
				<button
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
					로그아웃
				</button>
				<button onClick={() => history.push('/write')}>게시물 작성</button>
			</div>
		)) ||
		(auth.yes !== 'yes' && (
			<div className='nav_login_container'>
				로그인을 해주세요.
				<button onClick={() => history.push('/login')}>로그인</button>
				<button onClick={() => history.push('/register')}>회원가입</button>
			</div>
		))
	);
}

export default withRouter(LoginBar);
