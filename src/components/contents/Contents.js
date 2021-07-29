import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import noImg2 from '../../images/noImg2.png';
import comments_icon from '../../images/comments_icon.svg';
import menu_icon from '../../images/menu_icon.svg';
import { modify } from '../../modules/modify';
import { timeSet } from '../../util/time';

function Contents({ history, board }) {
	const { id, title, date, price, author, thumbImg, isMine } = board;
	const [menuHandle, setMenuHandle] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		function clickEvent(e) {
			if (e.target.dataset.set !== id + 'target') {
				setMenuHandle(false);
			}
		}
		if (isMine) {
			document.addEventListener('click', clickEvent);
		}

		return () => document.removeEventListener('click', clickEvent);
	}, []);

	const onClickHandler = (e) => {
		if (e.target.id !== 'target__contents__menu__icon') {
			history.push(`/content/${id}`);
		}
	};

	const onDeleteHandler = () => {
		if (window.confirm('삭제하시겠습니까?')) {
			axios
				// .delete(`https://anabada.du.r.appspot.com/api/board/${contents.id}`)
				.delete(`/board/${id}`)
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
				.get(`/board/${id}`)
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
								id,
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
	let priceToLocaleString = price.toLocaleString('ko');

	return (
		<div className='contents__container' onClick={onClickHandler}>
			<div className='contents__img__container'>
				<img
					className='contents__img'
					alt=''
					src={thumbImg}
					onError={onErrorHandler}
				/>
			</div>
			<div className='contents__desc__container'>
				<span className='contents__title'>
					{title.length < 12 ? title : title.slice(0, 11) + '···'}
				</span>
				<span
					className='contents__info'
					style={isMine ? { color: 'black' } : {}}>
					{author} | {timeSet(date)}
				</span>
				<span className='contents__price'>{priceToLocaleString}원</span>
			</div>
			{isMine && (
				<img
					data-set={id + 'target'}
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
						data-set={id + 'target'}
						id='target__contents__menu__icon'
						className='contents__menu__item'
						onClick={onModifyHandler}>
						수정하기
					</div>
					<div
						data-set={id + 'target'}
						id='target__contents__menu__icon'
						className='contents__menu__item'
						onClick={onDeleteHandler}>
						삭제하기
					</div>
				</div>
			)}
			<div className='contents__comments__icon__container'>
				<img src={comments_icon} alt='' />
				{/* {commentCount} */}
			</div>
		</div>
	);
}

export default withRouter(Contents);
