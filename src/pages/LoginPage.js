import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../modules/auth';

function LoginPage({ history }) {
	const [_id, set_id] = useState('');
	const onIdHandler = (e) => {
		set_id(e.currentTarget.value.replace(id_regExp, ''));
	};

	const [_password, set_password] = useState('');
	const onPasswordHandler = (e) => {
		set_password(e.currentTarget.value.replace(password_regExp, ''));
	};

	let req = { uid: _id, upw: _password };
	const dispatch = useDispatch(login);
	const onSubmitHandler = () => {
		if (_id.length < 4) {
			alert('아이디는 4자리 이상입니다.');
		} else {
			if (_password.length < 8) {
				alert('비밀번호는 8자리 이상입니다.');
			} else {
				axios
					.post('/user/login', req)
					.then((res) => {
						if (res.data.result === 'OK') {
							console.log('로그인 성공');
							dispatch(
								login({ yes: 'yes', nickname: res.data.nickname })
							);
							history.push('/');
						}
					})
					.catch((error) => console.log(error, '로그인에 실패했습니다.'));
			}
		}
	};

	const inputRef = useRef();
	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<div className='container' style={{ flexDirection: 'column' }}>
			<h3>아나바다에 오신것을 환영합니다!</h3>
			<div className='login_container'>
				<div className='login_input_container'>
					<input
						ref={inputRef}
						className='login_input'
						maxLength='12'
						placeholder='아이디'
						value={_id}
						onChange={onIdHandler}
					/>
					<input
						type='password'
						className='login_input'
						style={{ marginTop: '5px' }}
						maxLength='30'
						placeholder='비밀번호'
						value={_password}
						onChange={onPasswordHandler}
					/>
				</div>
				<div className='login_container'>
					<div className='login_button' onClick={onSubmitHandler}>
						로그인
					</div>
					<div
						className='login_button'
						onClick={() => {
							history.push('/register');
						}}>
						회원가입
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;

let id_regExp = /[^a-z0-9]/i;
let password_regExp = /[^a-z0-9_!]/i;
