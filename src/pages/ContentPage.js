import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Comments from '../components/comments/Comments';
import Loading from '../components/Loading/Loading';
import { auth_confirm } from '../function/auth_confirm';

function ContentPage({ history }) {
	const dispatch = useDispatch();
	const [list, setList] = useState();
	let { id } = useParams();
	useEffect(() => {
		auth_confirm(dispatch, history);
		axios.get(`/board/${id}`).then((res) => {
			if (res.data.resultCode === 'OK') {
				console.log('상세페이지 불러오기 성공');
				setList(res.data.board);
			}
		});
	}, []);
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
				<div id='contentsPage__img__container'>
					<img src={list.detailImg} id='contentsPage__img' alt='' />
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

export default ContentPage;
