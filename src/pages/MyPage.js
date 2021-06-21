import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { user_logout } from '../modules/auth';
import { logout } from '../controller/user';

function MyPage({ history }) {
	const [active, setActive] = useState('0');
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	useEffect(() => {
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
		const target = e.currentTarget.dataset.set;
		if (target === '2') {
			logout().then((res) => {
				if (!!!res) {
					return console.error('error');
				}
				dispatch(user_logout());
				window.location.reload();
			});
		} else {
			setActive(target);
		}
	};
	const onMapHandler = () => {
		if (window.confirm('현재 위치정보를 다시 받아오시겠습니까?')) {
			history.push('/map');
		}
	};
	return (
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
						<div id='mypage__user__location__button' onClick={onMapHandler}>
							위치 수정
						</div>
					</div>
					<div data-set='2' onClick={onClickHandler}>
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
	);
}
export default withRouter(MyPage);
