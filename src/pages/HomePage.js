import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Contents from '../components/contents/Contents';
import { withRouter } from 'react-router-dom';
import * as boardController from '../controller/board';

function HomePage() {
	const boardStore = useSelector((state) => state.board);
	useEffect(() => {
		if (boardStore.length === 0) {
			boardController.getAllBoard().then((res) => console.log(res));
		}
	}, []);
	return (
		<div className='container'>
			{boardStore.map((board, idx) => (
				<Contents key={idx} board={board} />
			))}
		</div>
	);
}

export default withRouter(HomePage);
