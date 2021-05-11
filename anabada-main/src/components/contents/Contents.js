import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import noImg2 from '../../images/noImg2.png';
import comments_icon from '../../images/comments_icon.svg';
import menu_icon from '../../images/menu_icon.svg';
import axios from 'axios';
import { modify } from '../../modules/modify';
import { useDispatch } from 'react-redux';

function Contents({ contents }) {
	const dispatch = useDispatch();
	const [menuHandle, setMenuHandle] = useState(false);
	const history = useHistory();
	const onClickHandler = (e) => {
		if (e.target.id !== 'target__contents__menu__icon') {
			console.log(e.target);
			history.push(`/content/${contents.id}`);
		}
	};

	const onDeleteHandler = () => {
		if (window.confirm('삭제하시겠습니까?')) {
			axios
				// .delete(`https://anabada.du.r.appspot.com/api/board/${contents.id}`)
				.delete(`/board/${contents.id}`)
				.then((res) => {
					if (res.data.resultCode === 'OK') {
						console.log('삭제 완료');
					} else {
						console.log('삭제실패');
					}
				})
				.catch((error) => console.log(error));
		}
	};
	const onModifyHandler = () => {
		if (window.confirm('수정하시겠습니까?')) {
			axios
				// .get(`https://anabada.du.r.appspot.com/api/board/${contents.id}`)
				.get(`/board/${contents.id}`)
				.then((res) => {
					if (res.data.resultCode === 'OK') {
						console.log('수정 준비 완료');
						let board = res.data.board;
						dispatch(
							modify([
								true,
								{
									title: board.title,
									price: board.price,
									contents: board.contents,
									detailImg: board.detailImg,
								},
								contents.id,
							])
						);
						history.push('/write');
					} else {
						console.log('수정준비실패');
					}
				})
				.catch((error) => console.log(error));
		}
	};

	const onErrorHandler = (e) => {
		e.target.src = noImg2;
	};
	let price = contents.price.toLocaleString('ko');

	let createdTime = contents.date;
	let time = `
	${createdTime.slice(0, 4)}.
	${createdTime.slice(5, 7)}. ${createdTime.slice(8, 10)}. ${createdTime.slice(
		11,
		16
	)}`;
	return (
		<div className='contents__container' onClick={onClickHandler}>
			<div className='contents__img__container'>
				<img
					className='contents__img'
					alt=''
					src={contents.thumbImg}
					onError={onErrorHandler}
				/>
			</div>
			<div className='contents__desc__container'>
				<span className='contents__title'>
					{contents.title.length < 12
						? contents.title
						: contents.title.slice(0, 11) + '···'}
				</span>
				<span
					className='contents__info'
					style={contents.isMine ? { color: 'black' } : {}}>
					{contents.author} | {time}
				</span>
				<span className='contents__price'>{price}원</span>
			</div>
			{contents.isMine && (
				<img
					onClick={() => setMenuHandle(!menuHandle)}
					id='target__contents__menu__icon'
					className='contents__menu__icon'
					src={menu_icon}
					alt=''
				/>
			)}
			{menuHandle && (
				<div
					id='target__contents__menu__icon'
					className='contents__menu__container'>
					<div
						id='target__contents__menu__icon'
						className='contents__menu__item'
						onClick={onModifyHandler}>
						수정하기
					</div>
					<div
						id='target__contents__menu__icon'
						className='contents__menu__item'
						onClick={onDeleteHandler}>
						삭제하기
					</div>
				</div>
			)}
			<div className='contents__comments__icon__container'>
				<img src={comments_icon} alt='' />
				{contents.commentCount}
			</div>
		</div>
	);
}

export default Contents;
