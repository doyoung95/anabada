import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { register_confirm } from '../function/confrim';

function RegisterPage({ history }) {
	const [_id, set_id] = useState('');
	const onIdHandler = (e) => {
		set_id(e.currentTarget.value.replace(id_regExp, ''));
	};

	const [_password, set_password] = useState('');
	const onPasswordHandler = (e) => {
		set_password(e.currentTarget.value.replace(password_regExp, ''));
	};

	const [_passwordConfirm, set_passwordConfirm] = useState('');
	const onPasswordConfirmHandler = (e) => {
		set_passwordConfirm(e.currentTarget.value.replace(password_regExp, ''));
	};

	const [_nickname, set_nickname] = useState('');
	const onNicknameHandler = (e) => {
		set_nickname(e.currentTarget.value.replace(nickname_regExp, ''));
	};

	const inputRef = useRef();
	const auth = useSelector((state) => state.auth);
	let req = { uid: _id, upw: _password, nickname: _nickname };
	const onSubmitHandler = () => {
		register_confirm(_password, _nickname, _id, _passwordConfirm, req, {
			history,
		});
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
					maxLength='10'
					placeholder='닉네임'
					value={_nickname}
					onChange={onNicknameHandler}
				/>
				<input
					className='register_input'
					maxLength='12'
					placeholder='아이디'
					value={_id}
					onChange={onIdHandler}
				/>
				<input
					type='password'
					className='register_input'
					maxLength='30'
					placeholder='비밀번호'
					value={_password}
					onChange={onPasswordHandler}
				/>
				<input
					type='password'
					className='register_input'
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

let id_regExp = /[^a-z0-9]/i;
let password_regExp = /[^a-z0-9_!]/i;
let nickname_regExp = /[^a-z0-9ㄱ-ㅎㅏ-ㅣ가-힣]/i;
