import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import home from '../../images/button/home.svg';
import home_B from '../../images/button/home_B.svg';
import plus from '../../images/button/plus.svg';
import plus_B from '../../images/button/plus_B.svg';
import comment from '../../images/button/comment.svg';
import comment_B from '../../images/button/comment_B.svg';
import user from '../../images/button/user.svg';
import user_B from '../../images/button/user_B.svg';
import { useSelector, useDispatch } from 'react-redux';
import { menu_change } from '../../modules/menu';
function Menu_bar({ history }) {
	const current_menu = useSelector((state) => state.current_menu);
	const dispatch = useDispatch();
	let button_img = [home, plus, plus, comment, user];
	let button_img_B = [home_B, plus_B, plus_B, comment_B, user_B];
	let button_name = ['홈', '준비중', '상품등록', '채팅', '마이'];
	let page_shift = ['/', '/', '/write', '/', '/mypage'];

	let list = [];
	button_name.map((el, idx) => {
		list.push(
			<div
				key={idx}
				className='menu__button'
				onClick={() => {
					dispatch(menu_change(idx));
					history.push(`${page_shift[idx]}`);
				}}>
				<img
					className='menu__button__img'
					src={idx === current_menu ? button_img_B[idx] : button_img[idx]}
				/>
				<div
					style={
						idx === current_menu
							? { color: 'black' }
							: { color: 'rgb(160, 160, 160)' }
					}>
					{el}
				</div>
			</div>
		);
	});

	return <div id='menu__container'>{list}</div>;
}

export default withRouter(Menu_bar);
