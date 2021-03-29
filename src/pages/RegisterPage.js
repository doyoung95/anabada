import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { register_confirm } from '../function/register_confirm';
import { auth_confirm } from '../function/auth_confirm';

function RegisterPage({ history }) {
	const dispatch = useDispatch();
	const [_id, set_id] = useState('');
	const onIdHandler = (e) => {
		set_id(e.currentTarget.value);
		if (id_regExp.test(e.currentTarget.value)) {
			wrong_id = true;
		} else {
			wrong_id = false;
		}
	};

	const [_password, set_password] = useState('');
	const onPasswordHandler = (e) => {
		set_password(e.currentTarget.value);
		if (password_regExp.test(e.currentTarget.value)) {
			wrong_password = true;
		} else {
			wrong_password = false;
		}
	};

	const [_passwordConfirm, set_passwordConfirm] = useState('');
	const onPasswordConfirmHandler = (e) => {
		set_passwordConfirm(e.currentTarget.value);
	};

	const [_nickname, set_nickname] = useState('');
	const onNicknameHandler = (e) => {
		set_nickname(e.currentTarget.value);
		if (nickname_regExp.test(e.currentTarget.value)) {
			wrong_nickname = true;
		} else {
			wrong_nickname = false;
		}
	};

	let req = { uid: _id, upw: _password, nickname: _nickname };
	const onSubmitHandler = () => {
		if (wrong_nickname || wrong_password || wrong_id) {
			alert('회원가입 양식에 맞지 않는 정보가 있습니다.');
		} else {
			register_confirm(_password, _nickname, _id, _passwordConfirm, req, {
				history,
			});
		}
	};

	useEffect(() => {
		auth_confirm(dispatch, history, 'YES');
	}, []);

	return (
		<div className='container'>
			<h3>SIGN UP</h3>
			<input
				className='register__input'
				maxLength='10'
				placeholder='닉네임'
				value={_nickname}
				onChange={onNicknameHandler}
			/>
			{wrong_nickname && (
				<span className='register__input__wrong'>
					닉네임은 2자리 이상, 10자리 이하의 한글, 영문,
					<br />
					숫자로 구성되어야합니다.
				</span>
			)}
			<input
				className='register__input'
				maxLength='12'
				placeholder='아이디'
				value={_id}
				onChange={onIdHandler}
			/>
			{wrong_id && (
				<span className='register__input__wrong'>
					아이디는 4자리 이상, 12자리 이하의 한글, 영문,
					<br /> 숫자로 구성되어야합니다.
				</span>
			)}
			<input
				type='password'
				className='register__input'
				maxLength='30'
				placeholder='비밀번호'
				value={_password}
				onChange={onPasswordHandler}
			/>
			{wrong_password && (
				<span className='register__input__wrong'>
					비밀번호는 8자리 이상, 30자리 이하의 영문, 숫자, _, ! 중
					<br />
					2가지 이상의 조합으로 구성되어야합니다.
				</span>
			)}
			<input
				type='password'
				className='register__input'
				maxLength='30'
				placeholder='비밀번호 확인'
				value={_passwordConfirm}
				onChange={onPasswordConfirmHandler}
			/>
			<div onClick={onSubmitHandler} id='register__button'>
				가입하기
			</div>
		</div>
	);
}

export default withRouter(RegisterPage);

let id_regExp = /[^a-z0-9]/i;
let password_regExp = /[^a-z0-9_!]/i;
let nickname_regExp = /[^a-z0-9ㄱ-ㅎㅏ-ㅣ가-힣]/i;
let wrong_id = false;
let wrong_password = false;
let wrong_nickname = false;
