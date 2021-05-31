import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { auth_confirm } from '../function/auth_confirm';
import Models from '../models';

function RegisterPage({ history }) {
	const dispatch = useDispatch();
	useEffect(() => {
		auth_confirm(dispatch, history, 'YES');
	}, []);

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

	const validationCheck = (value, type) => {
		const update = Object.assign({}, validation);
		if (Validation.RegExp[type].test(value)) {
			update[type] = true;
		} else {
			update[type] = false;
		}
		setValidation(update);
	};

	const onChangeHandler = (e, type) => {
		let value = e.currentTarget.value;
		type !== 'pwc' && validationCheck(value, type);
		switch (type) {
			case 'uid':
				return setUid(value);
			case 'upw':
				return setUpw(value);
			case 'pwc':
				return setPwc(value);
			case 'nickname':
				return setNickname(value);
		}
	};

	let userInputData = { uid: uid, upw: upw, nickname: nickname };
	const onSubmitHandler = () => {
		Validation.userInputData([uid, upw, nickname]);
		const errorINFO = Validation.errorINFO;
		const errorMessage = Validation.errorMessage;
		for (let key in validation) {
			if (validation[key] || userInputData[key].length === 0) {
				return errorMessage('WRONG_INPUT');
			}
		}
		for (var i = 0; i < 3; i++) {
			if (errorINFO.type[i] < errorINFO.minLength[i]) {
				return errorMessage(
					'SHORT_LENGTH',
					errorINFO.text[i],
					errorINFO.minLength[i]
				);
			}
		}

		if (Validation.complexityCheck(upw) < 2) {
			return errorMessage('COMPLEXITY');
		}
		if (upw !== pwc) {
			return errorMessage('PASSWORD_CONFIRM');
		}
		axios
			.post('/user/signup', userInputData)
			// .post('https://anabada.du.r.appspot.com/api/user/signup', req)
			.then((res) => {
				console.log(res);
				if (res.data.success) {
					alert(nickname + '님 회원가입되셨습니다.');
					console.log('회원가입 성공');
					history.push('/');
				} else {
					errorMessage('ERROR');
					console.log('회원가입 실패');
				}
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className='container'>
			<div id='register__title'>Create Account</div>
			<input
				className='register__input'
				maxLength='12'
				placeholder='ID'
				value={uid}
				onChange={(e) => onChangeHandler(e, 'uid')}
			/>
			{validation.uid && (
				<span className='register__input__wrong'>
					아이디는 4자리 이상, 12자리 이하의 한글, 영문,
					<br /> 숫자로 구성되어야합니다.
				</span>
			)}
			<input
				type='password'
				className='register__input'
				maxLength='30'
				placeholder='Password'
				value={upw}
				onChange={(e) => onChangeHandler(e, 'upw')}
			/>
			{validation.pw && (
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
				placeholder='Confirm password'
				value={pwc}
				onChange={(e) => onChangeHandler(e, 'pwc')}
			/>
			<input
				className='register__input'
				maxLength='10'
				placeholder='Nickname'
				value={nickname}
				onChange={(e) => onChangeHandler(e, 'nickname')}
			/>
			{validation.nickname && (
				<span className='register__input__wrong'>
					닉네임은 2자리 이상, 10자리 이하의 한글, 영문,
					<br />
					숫자로 구성되어야합니다.
				</span>
			)}
			<div onClick={onSubmitHandler} id='register__button'>
				Confirm
			</div>
			<div
				onClick={() => {
					history.push('/');
				}}
				id='register__button__cancel'>
				Cancel
			</div>
		</div>
	);
}

export default withRouter(RegisterPage);
