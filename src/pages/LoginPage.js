import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { user_login } from '../modules/auth';
import Models from '../models';
import anabada from '../images/anabada.svg';
import { login } from '../controller/user';

function LoginPage({ history }) {
	const dispatch = useDispatch();

	const Validation = new Models.Validation();

	const [uid, setUid] = useState('');
	const [upw, setUpw] = useState('');
	const onInputHandler = (e, type) => {
		let value = e.currentTarget.value;
		switch (type) {
			case 'uid':
				return setUid(value);
			case 'upw':
				return setUpw(value);
			default:
		}
	};

	let userInputData = { uid: uid, upw: upw };
	const onSubmitHandler = () => {
		login(userInputData)
			.then((res) => {
				if (res.data.success) {
					dispatch(user_login({ yes: 'yes', data: res.data }));
					history.goBack();
				} else {
					Validation.errorMessage('LOGIN_FAIL');
				}
			})
			.catch(console.error);
	};
	const onEnterKey = (e) => {
		if (e.keyCode === 13) {
			onSubmitHandler();
		}
	};

	return (
		<div className='container'>
			<img alt='' id='login__logo' src={anabada} />
			<input
				type='text'
				className='login__input'
				maxLength={Validation.uid.maxLength}
				placeholder='ID'
				value={uid}
				onKeyDown={onEnterKey}
				onChange={(e) => onInputHandler(e, 'uid')}
			/>
			<input
				type='password'
				className='login__input'
				maxLength={Validation.upw.maxLength}
				placeholder='Password'
				value={upw}
				onKeyDown={onEnterKey}
				onChange={(e) => onInputHandler(e, 'upw')}
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
					localStorage.current_menu = 0;
				}}
				id='login__skip'>
				skip
			</div>
		</div>
	);
}

export default withRouter(LoginPage);
