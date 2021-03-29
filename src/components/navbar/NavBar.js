import React from 'react';
import LoginBar from './LoginBar';
import { withRouter } from 'react-router-dom';

function NavBar({ history }) {
	return (
		<div className='nav__container'>
			<div id='nav'>
				<span id='nav__logo' onClick={() => history.push('/')}>
					아나바다
				</span>
				<LoginBar />
			</div>
		</div>
	);
}

export default withRouter(NavBar);
