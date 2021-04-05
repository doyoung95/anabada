import React, { useState, useEffect } from 'react';
import Contents from '../components/contents/Contents';
import { useSelector, useDispatch } from 'react-redux';
import { auth_confirm } from '../function/auth_confirm';
import { board_call } from '../function/board_call';
import Loading from '../components/Loading/Loading';
import NavBar from '../components/navbar/NavBar';
import plus from '../images/plus.svg';

function HomePage({ history }) {
	const dispatch = useDispatch();
	const contents = useSelector((state) => state.contents);

	const [board_no, setBoard_no] = useState(1);
	const onBoardSwitch = (N) => {
		board_call(dispatch, board_no, N);
		setBoard_no(board_no + N);
	};

	useEffect((N) => {
		auth_confirm(dispatch, history);
		board_call(dispatch, board_no, N);
	}, []);

	let list = contents.map((contents) => (
		<Contents key={contents.id} contents={contents} />
	));
	if (list.length > 0) {
		return (
			<div className='container' id='home'>
				<NavBar />
				{list}
				<img
					src={plus}
					alt=''
					className='function__button'
					onClick={() => {
						history.push('/write');
					}}
				/>
			</div>
		);
	} else {
		return <Loading />;
	}
}

export default HomePage;
