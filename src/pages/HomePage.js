import React from 'react';
import Contents from '../components/contents/Contents';
import { withRouter } from 'react-router-dom';

function HomePage({ data }) {
	return (
		<div className='container'>
			{data.map((board, idx) => (
				<Contents key={idx} board={board} />
			))}
		</div>
	);
}

export default withRouter(HomePage);
