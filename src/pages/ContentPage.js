import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import Loading from '../components/Loading/Loading';
import noImg from '../images/noImg.png';
import backbutton from '../images/backbutton.svg';

function ContentPage({ history, data }) {
	// const { title, date, price, author, thumbImg, isMine } = board;
	const [list] = useState();
	let { id } = useParams();
	console.log(data.getDetailById(id));
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
	if (list !== undefined) {
		let createdTime = list.date;
		let time = `
		${createdTime.slice(0, 4)}.
		${createdTime.slice(5, 7)}. ${createdTime.slice(8, 10)}. ${createdTime.slice(
			11,
			16
		)}`;
		let price = list.price.toLocaleString('ko');
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
						src={list.detailImg}
						id='contentsPage__img'
						alt=''
						onError={onErrorHandler}
					/>
				</div>
				<div id='contentsPage__info__container'>
					<span id='contentsPage__title'>{list.title}</span>
					<span id='contentsPage__info'>
						{list.author} | {time}
					</span>
					<span id='contentsPage__price'>{price}원</span>
				</div>
				<div id='contentsPage__desc__container'>
					<pre id='contentsPage__desc' readOnly>
						{list.contents}
					</pre>
				</div>
				<Comments value={id} />
			</div>
		);
	} else {
		return <Loading />;
	}
}

export default withRouter(ContentPage);
