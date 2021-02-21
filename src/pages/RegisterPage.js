import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

function RegisterPage({ history }) {
	const auth = useSelector((state) => state.auth);
	const [_id, set_id] = useState('');
	const [_password, set_password] = useState('');
	const [_passwordConfirm, set_passwordConfirm] = useState('');
	const [_nickname, set_nickname] = useState('');
	const onNicknameHandler = (e) => {
		set_nickname(e.currentTarget.value);
	};
	const onIdHandler = (e) => {
		set_id(e.currentTarget.value);
	};
	const onPasswordHandler = (e) => {
		set_password(e.currentTarget.value);
	};
	const onPasswordConfirmHandler = (e) => {
		set_passwordConfirm(e.currentTarget.value);
	};

	let req = { uid: _id, upw: _password, nickname: _nickname };

	const onSubmitHandler = () => {
		if (_password === _passwordConfirm) {
			axios
				.post('/user/signup', req)
				.then((res) => {
					console.log(res);
					if (res.data.result === 'OK') {
						console.log('회원가입 성공');
						history.push('/');
					} else if (res.data.result === '중복 발생') {
						console.log('중복입니다.');
					}
				})
				.catch((error) => console.log(error));
		} else {
			window.alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
		}
	};
	if (auth.id !== undefined) history.push('/');
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100vh',
				height: '80vh',
			}}>
			{/* 아이디, 비밀번호, 비밀번호 확인 입력칸 */}
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<h3>회원 정보 및 회원가입</h3>
				<input
					style={{ margin: '10px', height: '30px', fontSize: '18px' }}
					size='35'
					maxLength='12'
					placeholder='닉네임'
					value={_nickname}
					onChange={onNicknameHandler}
				/>
				{/* 아이디 */}
				<input
					style={{ margin: '10px', height: '30px', fontSize: '18px' }}
					size='35'
					maxLength='12'
					placeholder='아이디'
					value={_id}
					onChange={onIdHandler}
				/>
				{/* 비밀번호 */}
				<input
					type='password'
					style={{ margin: '10px', height: '30px', fontSize: '18px' }}
					size='35'
					maxLength='30'
					placeholder='비밀번호'
					value={_password}
					onChange={onPasswordHandler}
				/>
				{/* 비밀번호 확인 */}
				<input
					type='password'
					style={{ margin: '10px', height: '30px', fontSize: '18px' }}
					size='35'
					maxLength='30'
					placeholder='비밀번호 확인'
					value={_passwordConfirm}
					onChange={onPasswordConfirmHandler}
				/>
				{/* 가입 버튼 */}
				<div
					onClick={onSubmitHandler}
					style={{
						cursor: 'pointer',
						width: '362px',
						height: '48px',
						backgroundColor: '#f5fd67',
						textAlign: 'center',
						lineHeight: '47px',
						fontWeight: 'bold',
						fontSize: '17px',
					}}>
					가입하기
				</div>
			</div>
		</div>
	);
}

export default withRouter(RegisterPage);
