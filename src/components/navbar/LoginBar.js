import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../modules/auth';
import { withRouter } from 'react-router-dom';

function LoginBar({ history }) {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch(logout);

	switch (auth.id !== undefined) {
		case true:
			return (
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<div style={{ textAlign: 'center' }}>로그인 : {auth.id}</div>
					<div>
						<button onClick={() => dispatch(logout())}>로그아웃</button>
					</div>
					<button onClick={()=>history.push('/write')}>게시물 작성</button>
				</div>
			);

		case false:
			return (
				<div style={{ margin: '10px' }}>
					<div style={{ textAlign: 'center' }}>비회원</div>
					<div>
						<button onClick={() => history.push('/login')}>로그인</button>
						<button onClick={() => history.push('/register')}>회원가입</button>
					</div>
				</div>
			);
		default:
			return (
				<div style={{ margin: '10px' }}>
					<div style={{ textAlign: 'center' }}>비회원</div>
					<div>
						<button onClick={() => history.push('/login')}>로그인</button>
						<button onClick={() => history.push('/register')}>회원가입</button>
					</div>
				</div>
			);
	}
}

export default withRouter(LoginBar);
