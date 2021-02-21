import React, { useState, useEffect } from 'react';
import Contents from '../components/contents/Contents';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function HomePage({ history }) {
	const contents = useSelector((state) => state.contents);
	const [board, setBoard] = useState([]);

	useEffect(() => {
		axios.get('GET/board').then((res) => {
			if (res.result === 'OK') {
				setBoard([...board, res.board]);
			}
		});
	}, []);

	return (
		<div
			style={{
				width: '100vh ',
				height: '80vh',
				margin: '0px 80px 0px 80px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<div
				style={{
					padding: '40px',
					boxSizing: 'border-box',
					display: 'grid',
					gridTemplateRows: 'repeat(auto-fill,minmax(20%,auto))',
					gridTemplateColumns: 'repeat(auto-fill,minmax(30%,auto))',
					rowGap: '40px',
					columnGap: '40px',
					width: '100vh',
					height: '80vh',
				}}>
				<button style = {{width: '100px', height:'40px',position:'sticky' ,top:'20px',left:'72vw'}}>게시물 작성</button>
				{contents.map((contents) => (
					<Contents contents={contents} />
				))}
			</div>
		</div>
	);
}

export default HomePage;
