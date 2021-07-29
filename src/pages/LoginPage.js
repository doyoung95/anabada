import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { user_login } from '../modules/auth';
import logo from '../images/anabada.svg';
import { login } from '../controller/user';
import User from '../models/User';

function LoginPage({ history }) {
	const dispatch = useDispatch();

	const [uid, setUid] = useState('');
	const [upw, setUpw] = useState('');

	const onChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case 'uid':
				return setUid(value);
			case 'upw':
				return setUpw(value);
			default:
		}
	};

	let userInputData = { uid: uid, upw: upw };
	const onSubmit = () => {
		if (uid.length === 0 || upw.length === 0) {
			return alert('비어있는 입력창이 존재합니다.');
		}
		let user = new User(userInputData);
		login(user)
			.then((res) => {
				if (res.data.success) {
					dispatch(user_login({ yes: 'yes', data: res.data }));
					history.goBack();
				} else {
					return alert('로그인 정보를 확인해주세요.');
				}
			})
			.catch((err) => {
				alert(
					'일시적 오류로 회원가입을 실패했습니다. 해당 오류가 지속된다면 고객센터로 문의해주시기 바랍니다.'
				);
				console.error(err);
			});
	};
	const onEnter = (e) => {
		if (e.keyCode === 13) {
			onSubmit();
		}
	};

	const onClick = (e) => {
		const { innerText } = e.target;
		switch (innerText) {
			case 'Create Account':
				return history.push('/register');
			case 'skip':
				localStorage.current_menu = 0;
				return history.push('/');
			default:
				break;
		}
	};

	return (
		<div className='container'>
			<img alt='Anabada logo' id='login__logo' src={logo} />
			<input
				name='uid'
				type='text'
				className='login__input'
				maxLength='12'
				placeholder='ID'
				value={uid}
				onKeyDown={onEnter}
				onChange={onChange}
			/>
			<input
				name='upw'
				type='password'
				className='login__input'
				maxLength='30'
				placeholder='Password'
				value={upw}
				onKeyDown={onEnter}
				onChange={onChange}
			/>
			<div className='login__button' id='login' onClick={onSubmit}>
				Login
			</div>
			<div className='login__button' id='signup' onClick={onClick}>
				Create Account
			</div>
			<div onClick={onClick} id='login__skip'>
				skip
			</div>
		</div>
	);
}

export default withRouter(LoginPage);
