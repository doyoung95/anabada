class Validation {
	constructor() {
		this.uid = {
			minLength: 4,
			maxLength: 12,
		};
		this.upw = {
			minLength: 8,
			maxLength: 30,
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
	}

	userInputData(data) {
		this.errorINFO.type = data;
	}

	complexityCheck(upw) {
		let complexity = 0;
		/[0-9]/.test(upw) && complexity++;
		/[a-z]/.test(upw) && complexity++;
		/[A-Z]/.test(upw) && complexity++;
		/[_!]/.test(upw) && complexity++;
		return complexity;
	}

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
		}
	}
}

export default Validation;
