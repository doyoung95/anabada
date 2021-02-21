import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../modules/auth';

function LoginBar({ history }) {
	const dispatch = useDispatch(logout);
	const auth = useSelector((state) => state.auth);
	return auth.id !== undefined ? (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			{auth.id}님 환영합니다.
			<button
				onClick={() => {
					dispatch(logout());
				}}>
				로그아웃
			</button>
			<button onClick={() => history.push('/write')}>게시물 작성</button>
		</div>
	) : (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<button onClick={() => history.push('/login')}>로그인</button>
			<button onClick={() => history.push('/register')}>회원가입</button>
		</div>
	);
}

export default withRouter(LoginBar);
