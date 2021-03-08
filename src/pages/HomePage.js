import React, { useEffect } from 'react';
import Contents from '../components/contents/Contents';
import { useSelector, useDispatch } from 'react-redux';
import { setting } from '../modules/contents';
import axios from 'axios';

function HomePage() {
	const dispatch = useDispatch(setting);
	const contents = useSelector((state) => state.contents);
	useEffect(() => {
		axios
			.get('/board')
			.then((res) => {
				if (res.data.resultCode === 'OK') {
					console.log('보드 불러오기 성공');
					dispatch(setting(res.data.boards));
				}
			})
			.catch((error) => console.log(error, '보드 불러오기 실패'));
	}, []);
	let list = contents.map((contents) => (
		<Contents key={contents.id} contents={contents} />
	));

	return (
		<div className='container'>
			<div className='home_container'>{list}</div>
		</div>
	);
}

export default HomePage;
