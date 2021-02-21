import React, { useState } from 'react';
import axios from 'axios';

function LoginPage({ history }) {
	const [_id, set_id] = useState('');
	const [_password, set_password] = useState('');
	const onIdHandler = (e) => {
		set_id(e.currentTarget.value);
	};
	const onPasswordHandler = (e) => {
		set_password(e.currentTarget.value);
	};
	let req = { uid: _id, upw: _password };
	const onSubmitHandler = () => {
		axios
			.post('/user/login', req)
			.then((res) => {
				if (res.data.result === 'OK') {
					console.log('로그인 성공');
				} else {
					console.log('로그인에 실패했습니다.');
				}
			})
			.catch((error) => console.log(error));

		// let result = user.find((user) => user.id === _id);
		// if (result !== undefined) {
		// 	if (result.password === _password) {
		// 		alert('로그인 성공');
		// 		dispatch(login(result));
		// 		history.push('/');
		// 	} else {
		// 		alert('비밀번호가 일치하지 않습니다.');
		// 	}
		// } else {
		// 	alert('등록되지 않은 아이디 입니다.');
		// }
	};

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100vh',
				height: '80vh',
			}}>
			<div>
				<h3 style={{ textAlign: 'center' }}>
					아나바다에 오신것을 환영합니다!
				</h3>
				<div
					style={{
						display: 'flex',
					}}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}>
						<input
							style={{ height: '30px', fontSize: '18px' }}
							size='27'
							maxLength='12'
							placeholder='아이디'
							value={_id}
							onChange={onIdHandler}
						/>
						<input
							type='password'
							style={{ margin: '5px', height: '30px', fontSize: '18px' }}
							size='27'
							maxLength='30'
							placeholder='비밀번호'
							value={_password}
							onChange={onPasswordHandler}
						/>
					</div>
					<div
						onClick={onSubmitHandler}
						style={{
							borderRadius: '20%',
							cursor: 'pointer',
							width: '80px',
							height: '80px',
							backgroundColor: '#f5fd67',
							textAlign: 'center',
							lineHeight: '77px',
							fontWeight: 'bold',
							fontSize: '17px',
							marginRight: '5px'
						}}>
						로그인
					</div>
					<div
						style={{
							borderRadius: '20%',
							cursor: 'pointer',
							width: '80px',
							height: '80px',
							backgroundColor: '#f5fd67',
							textAlign: 'center',
							lineHeight: '77px',
							fontWeight: 'bold',
							fontSize: '17px',
						}}
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
