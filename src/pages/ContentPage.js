import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import Loading from '../components/Loading/Loading';
import noImg from '../images/noImg.png';
import backbutton from '../images/backbutton.svg';
import { timeSet } from '../util/time';

function ContentPage({ history, data }) {
	// const { title, date, price, author, thumbImg, isMine } = board;
	let { id } = useParams();
	let { title, contents, date, price, author, isMine, detailImg } =
		data.getDetailById(id);
	let priceToLocaleString = price.toLocaleString('ko');
	// useEffect(() => {
	// 	getBoardById().then((res) => {
	// 		if (!!!res) {
	// 			return console.error('error');
	// 		}
	// 		if (res.data.resultCode === 'OK') {
	// 			console.log('상세페이지 불러오기 성공');
	// 			setList(res.data.board);
	// 		}
	// 	});
	// }, []);
	// 2;
	const onErrorHandler = (e) => {
		e.target.src = noImg;
	};
	return (
		<div className='container'>
			<img
				id='backbutton'
				alt=''
				src={backbutton}
				onClick={() => {
					history.push('/');
				}}
			/>
			<div id='contentsPage__img__container'>
				<img
					src={detailImg}
					id='contentsPage__img'
					alt=''
					onError={onErrorHandler}
				/>
			</div>
			<div id='contentsPage__info__container'>
				<span id='contentsPage__title'>{title}</span>
				<span id='contentsPage__info'>
					{author} | {timeSet(date)}
				</span>
				<span id='contentsPage__price'>{priceToLocaleString}원</span>
			</div>
			<div id='contentsPage__desc__container'>
				<pre id='contentsPage__desc' readOnly>
					{contents}
				</pre>
			</div>
			<Comments value={id} />
		</div>
	);
}

export default withRouter(ContentPage);
