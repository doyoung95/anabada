import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

function RegisterPage({ history }) {
	const [_id, set_id] = useState('');
	const onIdHandler = (e) => {
		set_id(e.currentTarget.value);
	};

	const [_password, set_password] = useState('');
	const onPasswordHandler = (e) => {
		set_password(e.currentTarget.value);
	};

	const [_passwordConfirm, set_passwordConfirm] = useState('');
	const onPasswordConfirmHandler = (e) => {
		set_passwordConfirm(e.currentTarget.value);
	};

	const [_nickname, set_nickname] = useState('');
	const onNicknameHandler = (e) => {
		set_nickname(e.currentTarget.value);
	};

	const inputRef = useRef();
	const auth = useSelector((state) => state.auth);
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

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	if (auth.id !== undefined) history.push('/');
	return (
		<div className='container'>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<h3>회원 정보 및 회원가입</h3>
				<input
					ref={inputRef}
					className='register_input'
					size='35'
					maxLength='12'
					placeholder='닉네임'
					value={_nickname}
					onChange={onNicknameHandler}
				/>
				<input
					className='register_input'
					size='35'
					maxLength='12'
					placeholder='아이디'
					value={_id}
					onChange={onIdHandler}
				/>
				<input
					type='password'
					className='register_input'
					size='35'
					maxLength='30'
					placeholder='비밀번호'
					value={_password}
					onChange={onPasswordHandler}
				/>
				<input
					type='password'
					className='register_input'
					size='35'
					maxLength='30'
					placeholder='비밀번호 확인'
					value={_passwordConfirm}
					onChange={onPasswordConfirmHandler}
				/>
				<div onClick={onSubmitHandler} id='click_button'>
					가입하기
				</div>
			</div>
		</div>
	);
}

export default withRouter(RegisterPage);
