import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading/Loading';
import { auth_confirm } from '../function/auth_confirm';
import backbutton from '../images/backbutton_b.svg';

export default function MyPage({ history }) {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	useEffect(() => {
		auth_confirm(dispatch, history, 'NO');
	}, []);
	return auth.yes === 'yes' ? (
		<div className='container'>
			<div id='mypage__user__container'>
				<div>user</div>
			</div>
			<div>{/* 내 게시글 리스트 */}</div>
		</div>
	) : (
		<Loading />
	);
}
