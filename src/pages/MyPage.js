import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading/Loading';
import { auth_confirm } from '../function/auth_confirm';

export default function MyPage({ history }) {
	const [active, set_active] = useState('0');
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	useEffect(() => {
		auth_confirm(dispatch, history, 'NO');
		let button = document.querySelectorAll('.mypage__contents__button');
		button.forEach((el) => {
			if (el.dataset.set === active) {
				el.classList.add('active');
			} else {
				el.classList.remove('active');
			}
		});
	}, [active]);

	const onClickHandler = (e) => {
		set_active(e.currentTarget.dataset.set);
	};
	const onMapHandler = () => {
		if (window.confirm('현재 위치정보를 다시 받아오시겠습니까?')) {
			history.push('/map');
		}
	};
	return auth.yes === 'yes' ? (
		<div className='container'>
			<div id='mypage__user__container'>
				<div id='mypage__user__left'>
					<div id='mypage__user__left__profile__img'></div>
					<div id='mypage__user__right__button'>프로필 수정</div>
				</div>
				<div id='mypage__user__right'>
					<div>{auth.data.nickname}</div>
					<div id='mypage__user__location'>
						<div>안산시 단원구</div>
						<div
							id='mypage__user__location__button'
							onClick={onMapHandler}>
							위치 수정
						</div>
					</div>
					<div
						onClick={() => {
							axios.get('/user/logout');
						}}>
						로그아웃
					</div>
				</div>
			</div>
			<div id='mypage__contents__container'>
				<div id='mypage__contents__button__container'>
					<div
						data-set='0'
						className='mypage__contents__button'
						onClick={onClickHandler}>
						내상품
					</div>
					<div
						data-set='1'
						className='mypage__contents__button'
						onClick={onClickHandler}>
						찜한상품
					</div>
				</div>
			</div>
		</div>
	) : (
		<Loading />
	);
}
