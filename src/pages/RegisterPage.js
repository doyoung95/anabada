import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { signup } from '../controller/user';
import Models from '../models';
import User from '../models/User';

function RegisterPage({ history }) {
	const Validation = new Models.Validation();

	const [uid, setUid] = useState('');
	const [upw, setUpw] = useState('');
	const [pwc, setPwc] = useState('');
	const [nickname, setNickname] = useState('');
	const [validation, setValidation] = useState({
		uid: false,
		upw: false,
		nickname: false,
	});

	const validationCheck = (name, value) => {
		const update = Object.assign({}, validation);
		if (Validation.RegExp[name].test(value)) {
			update[name] = true;
		} else {
			update[name] = false;
		}
		setValidation(update);
	};

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		name !== 'pwc' && validationCheck(name, value);
		switch (name) {
			case 'uid':
				return setUid(value);
			case 'upw':
				return setUpw(value);
			case 'pwc':
				return setPwc(value);
			case 'nickname':
				return setNickname(value);
			default:
		}
	};
	const onEnterKey = (e) => {
		if (e.keyCode === 13) {
			onSubmitHandler();
		}
	};

	let userInputData = { uid: uid, upw: upw, pwc: pwc, nickname: nickname };
	const onSubmitHandler = () => {
		const user = new User(userInputData);
		console.log(user.getData());
		const result = Validation.register(validation, user.getData());
		if (result) {
			signup(userInputData)
				.then((res) => {
					console.log(res);
					if (res.data.success) {
						alert(this.nickname.value + '님 회원가입되셨습니다.');
						console.log('회원가입 성공');
						history.push('/');
					} else {
						Validation.errorMessage('ERROR');
						console.log('회원가입 실패');
					}
				})
				.catch(console.error);
		}
	};

	return (
		<div className='container'>
			<div id='register__title'>Create Account</div>
			<input
				name='uid'
				type='text'
				className='register__input'
				maxLength={Validation.uid.maxLength}
				placeholder='ID'
				value={uid}
				onKeyDown={onEnterKey}
				onChange={onChangeHandler}
			/>
			{validation.uid && Validation.errorText.uid}
			<input
				name='upw'
				type='password'
				className='register__input'
				maxLength={Validation.upw.maxLength}
				placeholder='Password'
				value={upw}
				onKeyDown={onEnterKey}
				onChange={onChangeHandler}
			/>
			{validation.upw && Validation.errorText.upw}
			<input
				name='pwc'
				type='password'
				className='register__input'
				maxLength={Validation.upw.maxLength}
				placeholder='Confirm password'
				value={pwc}
				onKeyDown={onEnterKey}
				onChange={onChangeHandler}
			/>
			<input
				name='nickname'
				type='text'
				className='register__input'
				maxLength='10'
				placeholder='Nickname'
				value={nickname}
				onKeyDown={onEnterKey}
				onChange={onChangeHandler}
			/>
			{validation.nickname && Validation.errorText.nickname}
			<div onClick={onSubmitHandler} id='register__button'>
				Confirm
			</div>
			<div
				onClick={() => {
					history.goBack();
				}}
				id='register__button__cancel'>
				Cancel
			</div>
		</div>
	);
}

export default withRouter(RegisterPage);
