import React, { useState } from 'react';
import { authLogin } from '../redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function LoginPage({ history, authLogin }) {
	const [Id, setId] = useState('');
	const [Password, setPassword] = useState('');
	const onIdHandler = (e) => {
		setId(e.currentTarget.value);
	};
	const onPasswordHandler = (e) => {
		setPassword(e.currentTarget.value);
	};

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: '100vh',
			}}>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<label>아이디</label>
				<input placeholder="아이디" value={Id} onChange={onIdHandler} />
				<label>비밀번호</label>
				<input
					placeholder="비밀번호"
					value={Password}
					onChange={onPasswordHandler}
				/>
				<hr />
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
					}}>
					<button onClick={() => authLogin()}>로그인</button>
					<button onClick={() => history.push('/')}>취소</button>
				</div>
			</div>
		</div>
	);
}
const mapStateToProps = ({}) => {
	return {};
};
const mapDispatchToProps = { authLogin };

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(LoginPage)
);
