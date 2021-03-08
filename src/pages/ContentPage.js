import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ContentPage() {
	const [list, setList] = useState([]);
	let { id } = useParams();
	useEffect(() => {
		axios.get(`/board/${id}`).then((res) => {
			setList(res.data.board);
		});
	}, []);
	console.log(list);
	return (
		<div className='container'>
			<div>
				<div>제목 : {list.title}</div>
				<div>작성자 : {list.id}</div>
				<div>가격 : {list.price}</div>
				<div>내용 : {list.desc}</div>
			</div>
		</div>
	);
}

export default ContentPage;
