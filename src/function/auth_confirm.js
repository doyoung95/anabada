import axios from 'axios';
import { login, logout } from '../modules/auth';

export const auth_confirm = (dispatch, history, Login) => {
	axios.get('/user').then((res) => {
		if (res.data.resultCode === 'OK') {
			console.log('로그인 중 입니다.');
			dispatch(login({ yes: 'yes', data: res.data }));
			if (Login === 'YES') {
				history.push('/');
			}
		} else {
			console.log('로그인 중 아닙니다.');
			dispatch(logout());
			if (Login === 'NO') {
				alert('로그인 후 이용해 주세요.');
				history.push('/login');
			}
		}
	});
};
