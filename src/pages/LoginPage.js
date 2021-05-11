import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../modules/auth';
import { auth_confirm } from '../function/auth_confirm';
import anabada from '../images/anabada.svg';

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
			// .post('https://anabada.du.r.appspot.com/api/user/login', req, {
			// 	withCredentials: true,
			// })
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
	const onEnterKey = (e) => {
		if (e.keyCode === 13) {
			onSubmitHandler();
		}
	};

	useEffect(() => {
		auth_confirm(dispatch, history, 'YES');
	}, []);

	return (
		<div className='container'>
			<img alt='' id='login__logo' src={anabada} />
			<input
				className='login__input'
				maxLength='12'
				onKeyDown={onEnterKey}
				placeholder='ID'
				value={_id}
				onChange={onIdHandler}
			/>
			<input
				type='password'
				className='login__input'
				maxLength='30'
				onKeyDown={onEnterKey}
				placeholder='Password'
				value={_password}
				onChange={onPasswordHandler}
			/>
			<div className='login__button' id='login' onClick={onSubmitHandler}>
				Login
			</div>
			<div
				className='login__button'
				id='signup'
				onClick={() => {
					history.push('/register');
				}}>
				Create Account
			</div>
			<div
				onClick={() => {
					history.push('/');
				}}
				id='login__skip'>
				skip
			</div>
		</div>
	);
}

export default LoginPage;
