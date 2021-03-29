import React from 'react';
import { useHistory } from 'react-router-dom';

function Contents({ contents }) {
	const history = useHistory();
	const onClickHandler = () => {
		history.push(`/content/${contents.id}`);
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
				<img className='contents__img' alt='' src={contents.thumbImg} />
			</div>
			<div className='contents__desc__container'>
				<span className='contents__title'>{contents.title}</span>
				<span className='contents__info'>
					{contents.author} | {time}
				</span>
				<span className='contents__price'>{price}원</span>
			</div>
		</div>
	);
}

export default Contents;
