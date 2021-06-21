class Validation {
	constructor() {
		this.uid = {
			minLength: 4,
			maxLength: 12,
		};
		this.upw = {
			minLength: 8,
			maxLength: 30,
			complexity: 2,
		};
		this.pwc = {};
		this.nickname = {
			minLength: 2,
			maxLength: 10,
		};
		this.RegExp = {
			uid: /[^a-z0-9]/i,
			upw: /[^a-z0-9_!]/i,
			nickname: /[^a-z0-9ㄱ-ㅎㅏ-ㅣ가-힣]/i,
		};
		this.errorINFO = {
			text: ['아이디', '비밀번호', '닉네임'],
			minLength: [4, 8, 2],
		};
		this.errorText = {
			uid: (
				<pre className='register__input__wrong'>
					{`아이디는 ${this.uid.minLength}자리 이상, ${this.uid.maxLength}자리 이하의 한글, 영문,\n숫자로 구성되어야합니다.`}
				</pre>
			),
			upw: (
				<pre className='register__input__wrong'>
					{`비밀번호는 ${this.upw.minLength}자리 이상, ${this.upw.maxLength}자리 이하의 영문, 숫자, _, !\n중 ${this.upw.complexity}가지 이상의 조합으로 구성되어야합니다.`}
				</pre>
			),
			nickname: (
				<pre className='register__input__wrong'>
					{`닉네임은 자리 이상, ${this.nickname.maxLength}자리 이하의 한글, 영문,\n숫자로 구성되어야합니다.`}
				</pre>
			),
		};
	}
	//  REGISTER METHOD
	register(validation, user) {
		this.errorINFO.type = [user.uid, user.upw, user.nickname];
		this.uid.value = user.uid;
		this.upw.value = user.upw;
		this.pwc.value = user.pwc;
		this.nickname.value = user.nickname;
		const errorINFO = this.errorINFO;
		const errorMessage = this.errorMessage;
		for (let key in validation) {
			if (validation[key] || user[key].length === 0) {
				errorMessage('WRONG_INPUT');
				return false;
			}
		}
		for (var i = 0; i < 3; i++) {
			if (errorINFO.type[i] < errorINFO.minLength[i]) {
				errorMessage('SHORT_LENGTH', errorINFO.text[i], errorINFO.minLength[i]);
				return false;
			}
		}
		if (this.complexityCheck(this.upw.value) < 2) {
			errorMessage('COMPLEXITY');
			return false;
		}
		if (this.upw.value !== this.pwc.value) {
			errorMessage('PASSWORD_CONFIRM');
			return false;
		}
		return true;
	}

	complexityCheck(upw) {
		let complexity = 0;
		/[0-9]/.test(upw) && complexity++;
		/[a-z]/.test(upw) && complexity++;
		/[A-Z]/.test(upw) && complexity++;
		/[_!]/.test(upw) && complexity++;
		return complexity;
	}

	// ERROR MESSAGE
	errorMessage(validation, option1, option2) {
		switch (validation) {
			case 'WRONG_INPUT':
				return alert('조건에 맞지 않는 정보를 수정해주세요.');
			case 'SHORT_LENGTH':
				return alert(
					`${option1}의 길이를 ${option2}자리 이상으로 입력해주세요.`
				);
			case 'COMPLEXITY':
				return alert(
					'비밀번호는 영문 소문자, 대문자, 숫자, !/_ 중 2개 이상 사용해야합니다.'
				);
			case 'PASSWORD_CONFIRM':
				return alert('비밀번호와 비밀번호 확인 값이 일치하지 않습니다.');
			case 'ERROR':
				return alert(
					'일시적 오류로 회원가입을 실패했습니다. 해당 오류가 지속된다면 고객센터로 문의해주시기 바랍니다. '
				);
			case 'LOGIN_FAIL':
				return alert('로그인 정보를 확인해주세요.');
			default:
		}
	}
}

export default Validation;
