import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { signup } from '../controller/user';

function RegisterPage({ history }) {
	const [email, setEmail] = useState('');
	const [uid, setUid] = useState('');
	const [upw, setUpw] = useState('');
	const [pwc, setPwc] = useState('');
	const [nickname, setNickname] = useState('');
	const [condition, setCondition] = useState({
		uid: false,
		upw: false,
		nickname: false,
	});
	const RegExp = {
		uid: /[^a-z0-9]/i,
		upw: /[^a-z0-9_!]/i,
		nickname: /[^a-z0-9ㄱ-ㅎㅏ-ㅣ가-힣]/i,
	};

	const conditionCheck = (name, value) => {
		const update = Object.assign({}, condition);
		if (RegExp[name].test(value)) {
			update[name] = true;
		} else {
			update[name] = false;
		}
		setCondition(update);
	};

	const onChange = (e) => {
		const { name, value } = e.target;
		name !== 'pwc' && name !== 'email' && conditionCheck(name, value);
		switch (name) {
			case 'email':
				return setEmail(value);
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

	const onEnter = (e) => {
		if (e.keyCode === 13) {
			onSubmit();
		}
	};

	const ValidationCheck = (userInputData) => {
		if (uid.length < 4 || upw.length < 8 || nickname.length < 2) {
			return alert('조건에 맞지 않는 정보를 수정해주세요.');
		}
		let complexity = 0;
		/[0-9]/.test(upw) && complexity++;
		/[a-z]/.test(upw) && complexity++;
		/[A-Z]/.test(upw) && complexity++;
		/[_!]/.test(upw) && complexity++;
		if (complexity < 2) {
			return alert('조건에 맞지 않는 정보를 수정해주세요.');
		}
		for (var key in condition) {
			if (condition[key]) {
				return alert('조건에 맞지 않는 정보를 수정해주세요.');
			}
		}
		for (var key in userInputData) {
			if (userInputData[key].length === 0) {
				return alert('비어있는 입력창이 존재합니다.');
			}
		}
		if (upw !== pwc) {
			return alert('비밀번호와 비밀번호 확인 값이 일치하지 않습니다.');
		}
	};

	const onSubmit = () => {
		ValidationCheck({ email, uid, upw, pwc, nickname });
		signup({ email, uid, upw, pwc, nickname })
			.then((res) => {
				console.log(res);
				if (res.data.success) {
					alert(nickname + '님 회원가입되셨습니다.');
					console.log('회원가입 성공');
					history.push('/');
				} else {
					console.log('회원가입 실패');
					switch (res.data.resultCode) {
						case 'Duplicated Email':
							return alert('이미 등록된 이메일 주소입니다.');
						case 'Duplicated Uid':
							return alert('이미 등록된 아이디입니다.');
						case 'Duplicated Nickname':
							return alert('이미 등록된 닉네임입니다.');
					}
				}
			})
			.catch((err) => {
				alert(
					'일시적 오류로 회원가입을 실패했습니다. 해당 오류가 지속된다면 고객센터로 문의해주시기 바랍니다.'
				);
				console.error(err);
			});
	};

	const errorText = {
		uid: (
			<pre className='register__input__wrong'>
				{`아이디는 4자리 이상, 12자리 이하의 한글, 영문,\n숫자로 구성되어야합니다.`}
			</pre>
		),
		upw: (
			<pre className='register__input__wrong'>
				{`비밀번호는 8자리 이상, 30자리 이하의 영문, 숫자, _, !\n중 2가지 이상의 조합으로 구성되어야합니다.`}
			</pre>
		),
		nickname: (
			<pre className='register__input__wrong'>
				{`닉네임은 자리 2이상, 10자리 이하의 한글, 영문,\n숫자로 구성되어야합니다.`}
			</pre>
		),
	};

	return (
		<div className='container'>
			<div id='register__title'>Create Account</div>
			<input
				name='email'
				type='email'
				className='register__input'
				placeholder='Email'
				value={email}
				onKeyDown={onEnter}
				onChange={onChange}
			/>
			<input
				name='uid'
				type='text'
				className='register__input'
				maxLength='12'
				placeholder='ID'
				value={uid}
				onKeyDown={onEnter}
				onChange={onChange}
			/>
			{condition.uid && errorText.uid}
			<input
				name='upw'
				type='password'
				className='register__input'
				maxLength='30'
				placeholder='Password'
				value={upw}
				onKeyDown={onEnter}
				onChange={onChange}
			/>
			{condition.upw && errorText.upw}
			<input
				name='pwc'
				type='password'
				className='register__input'
				maxLength='30'
				placeholder='Confirm password'
				value={pwc}
				onKeyDown={onEnter}
				onChange={onChange}
			/>
			<input
				name='nickname'
				type='text'
				className='register__input'
				maxLength='10'
				placeholder='Nickname'
				value={nickname}
				onKeyDown={onEnter}
				onChange={onChange}
			/>
			{condition.nickname && errorText.nickname}
			<div onClick={onSubmit} id='register__button'>
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
