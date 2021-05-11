import axios from 'axios';

export const register_confirm = (
	_password,
	_nickname,
	_id,
	_passwordConfirm,
	req,
	{ history }
) => {
	if (_nickname.length < 2) {
		return alert('닉네임은 2자리 이상이어야 합니다.');
	}
	if (_id.length < 4) {
		return alert('아이디는 4자리 이상이어야 합니다.');
	}
	if (_password.length < 8) {
		return alert('비밀번호는 8자리 이상이어야 합니다');
	}
	const pwComplexity = () => {
		let result = 0;
		/[0-9]/.test(_password) && result++;
		/[a-z]/.test(_password) && result++;
		/[A-Z]/.test(_password) && result++;
		/[_!]/.test(_password) && result++;
		return result;
	};
	if (pwComplexity() < 2) {
		return alert(
			'비밀번호는 영문 소문자, 대문자, 숫자, !/_ 중 2개 이상 사용해야합니다.'
		);
	}
	if (_password !== _passwordConfirm) {
		return alert('비밀번호와 비밀번호 확인의 값이 일치하지 않습니다.');
	}
	axios
		.post('/user/signup', req)
		// .post('https://anabada.du.r.appspot.com/api/user/signup', req)
		.then((res) => {
			console.log(res);
			if (res.data.success) {
				alert(_nickname + '님 회원가입되셨습니다.');
				console.log('회원가입 성공');
				history.push('/');
			} else {
				alert('이미 등록된 아이디 입니다.');
				console.log('중복입니다.');
			}
		})
		.catch((error) => console.log(error));
};
