import React, { useState, useEffect } from 'react';
import Contents from '../components/contents/Contents';
import { useSelector, useDispatch } from 'react-redux';
import { auth_confirm } from '../function/auth_confirm';
import { board_call, board_update } from '../function/board_call';
import Loading from '../components/Loading/Loading';
import NavBar from '../components/navbar/NavBar';

function HomePage({ history }) {
	const dispatch = useDispatch();
	const contents = useSelector((state) => state.contents);
	const [board_no, setBoard_no] = useState(1);
	const [fetch, setFetch] = useState(true);

	useEffect(() => {
		const infinityScroll = () => {
			let scrollHeight = document.documentElement.scrollHeight;
			let scrollTop = document.documentElement.scrollTop;
			let clientHeight = document.documentElement.clientHeight;
			if (scrollTop + clientHeight >= scrollHeight - 10 && fetch) {
				setFetch(false);
				setBoard_no(board_no + 1);
				board_update(dispatch, board_no + 1);
				window.removeEventListener('scroll', infinityScroll, true);
				setInterval(() => {
					setFetch(true);
				}, 800);
			}
		};
		window.addEventListener('scroll', infinityScroll, true);
		return () => {
			window.removeEventListener('scroll', infinityScroll, true);
		};
	}, [fetch]);

	useEffect(() => {
		auth_confirm(dispatch, history);
		board_call(dispatch);
	}, []);

	let list = contents.map((contents) => (
		<Contents key={contents.id} contents={contents} />
	));
	// if (list.length > 0) {
	// 	console.log('render');
	return (
		<div className='container' id='home'>
			{list}
		</div>
	);
	// }
	// else {
	// 	return <Loading />;
	// }
}

export default HomePage;
