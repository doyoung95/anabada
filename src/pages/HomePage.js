import React, { useState, useEffect } from 'react';
import Contents from '../components/contents/Contents';
import { useSelector } from 'react-redux';
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
	});

	return (
		<div className='container'>
			<div className='home_container'>
				{contents.map((contents) => (
					<Contents contents={contents} />
				))}
			</div>
		</div>
	);
}

export default HomePage;
