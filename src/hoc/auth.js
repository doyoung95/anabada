import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { page_loading, page_loaded } from '../modules/loading';
import { user_login, user_logout } from '../modules/auth';
import { authCheck } from '../controller/user';

export default function Auth(SpecificComponent, option, data = null) {
	function AuthCheck({ history }) {
		const dispatch = useDispatch();
		useEffect(() => {
			dispatch(page_loading());
			authCheck()
				.then((res) => {
					let isAuth = false;
					if (res.data.success) {
						console.log('login');
						dispatch(user_login(res.data));
						isAuth = true;
					} else {
						console.log('is not login');
						dispatch(user_logout());
					}
					return isAuth;
				})
				.then((isAuth) => {
					if (option) {
						if (!isAuth) {
							alert('로그인 후 이용해 주세요.');
							history.push('/login');
						}
					} else if (option === false) {
						if (isAuth) {
							history.goBack();
						}
					}
				})
				.then(() => dispatch(page_loaded()));
		}, []);
		return <SpecificComponent data={data} />;
	}

	return AuthCheck;
}
