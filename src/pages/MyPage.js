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
		<div>
			<div id='mypage__nav'>
				<img
					alt=''
					onClick={() => history.push('/')}
					id='backbutton'
					src={backbutton}
				/>
				<h2>마이페이지</h2>
			</div>
			<div id='mypage__container'>
				<h3>내 정보</h3>
				<div id='mypage__user__container'>
					<div id='mypage__user__title' className='mypage__element'>
						<div>I D : </div>
						<div>닉네임 : </div>
					</div>
					<div id='mypage__user__desc' className='mypage__element'>
						<div>{auth.data.uid}</div>
						<div>{auth.data.nickname}</div>
					</div>
				</div>
				<h3>내 활동</h3>
			</div>
		</div>
	) : (
		<Loading />
	);
}
