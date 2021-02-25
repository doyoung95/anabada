import React from 'react';
import LoginBar from './LoginBar';
import anabada from '../../images/anabada-w.png';
import { withRouter } from 'react-router-dom';

function NavBar({ history }) {
	return (
		<div className='nav_container'>
			<img
				alt=''
				style={{ cursor: 'pointer' }}
				src={anabada}
				onClick={() => history.push('/')}></img>
			<LoginBar />
		</div>
	);
}

export default withRouter(NavBar);
