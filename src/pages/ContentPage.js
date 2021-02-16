import React from 'react';
import { useSelector } from 'react-redux';

function ContentPage() {
	const view = useSelector((state) => state.view);
	return (
		<div
			className='page'
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: '80vh',
			}}>
			<div>제목 : {view.title}</div>
			<div>작성자 : {view.id}</div>
			<div>가격 : {view.price}</div>
			<div>내용 : {view.desc}</div>
		</div>
	);
}

export default ContentPage;
