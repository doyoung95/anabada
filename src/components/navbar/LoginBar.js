import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authLogout } from '../../redux';

function LoginBar({ history, authNow, authLogout }) {
	switch (authNow) {
		case 'login':
			return (
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<div>로그인 중</div>
					<div>
						<button>내 게시물</button>
						<button onClick={() => authLogout()}>로그아웃</button>
					</div>
				</div>
			);

		case 'logout':
			return (
				<div>
					<div>비로그인</div>
					<div>
						<button onClick={() => history.push('/login')}>로그인</button>
						<button onClick={() => history.push('/register')}>회원가입</button>
					</div>
				</div>
			);
	}
}

const mapStateToProps = ({ auth }) => {
	return {
		authNow: auth.authNow,
	};
};

const mapDispatchToProps = { authLogout };

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(LoginBar)
);
