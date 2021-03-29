import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../modules/auth';
import { auth_confirm } from '../function/auth_confirm';

function LoginPage({ history }) {
	const dispatch = useDispatch();

	const [_id, set_id] = useState('');
	const onIdHandler = (e) => {
		set_id(e.currentTarget.value);
	};

	const [_password, set_password] = useState('');
	const onPasswordHandler = (e) => {
		set_password(e.currentTarget.value);
	};

	let req = { uid: _id, upw: _password };
	const onSubmitHandler = () => {
		axios
			.post('/user/login', req)
			.then((res) => {
				if (res.data.resultCode === 'OK') {
					console.log('로그인 성공');
					dispatch(login({ yes: 'yes', data: res.data }));
					history.push('/');
				} else {
					console.log('로그인 실패');
					alert('로그인 정보를 확인해주세요.');
				}
			})
			.catch((error) => {
				console.log(error, '로그인에 실패했습니다.');
				alert('로그인 정보를 확인해주세요.');
			});
	};

	useEffect(() => {
		auth_confirm(dispatch, history, 'YES');
	}, []);

	return (
		<div className='container'>
			<h3>아나바다에 오신것을 환영합니다!</h3>
			<input
				className='login_input'
				maxLength='12'
				placeholder='ID'
				value={_id}
				onChange={onIdHandler}
			/>
			<input
				type='password'
				className='login_input'
				maxLength='30'
				placeholder='PW'
				value={_password}
				onChange={onPasswordHandler}
			/>
			<div className='login_button' onClick={onSubmitHandler}>
				LOGIN
			</div>
			<div
				className='login_button'
				onClick={() => {
					history.push('/register');
				}}>
				SIGNUP
			</div>
		</div>
	);
}

export default LoginPage;
