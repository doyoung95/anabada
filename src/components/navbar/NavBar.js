import React from 'react';
import LoginBar from './LoginBar';
import anabada from '../../images/anabada.jpg';
import { withRouter } from 'react-router-dom';

function NavBar({ history }) {
	return (
		<div style={{ display: 'flex' }}>
			<img
				style={{ cursor: 'pointer' }}
				src={anabada}
				onClick={() => history.push('/')}></img>
			<LoginBar />
		</div>
	);
}

export default withRouter(NavBar);
