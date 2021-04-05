import React from 'react';
import { useHistory } from 'react-router-dom';
import noImg2 from '../../images/noImg2.png';
import comments_icon from '../../images/comments_icon.svg';

function Contents({ contents }) {
	const history = useHistory();
	const onClickHandler = () => {
		history.push(`/content/${contents.id}`);
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
				<span className='contents__info'>
					{contents.author} | {time}
				</span>
				<span className='contents__price'>{price}원</span>
			</div>
			<div className='contents__comments__icon__container'>
				<img src={comments_icon} alt='' />
				{contents.commentCount}
			</div>
		</div>
	);
}

export default Contents;
