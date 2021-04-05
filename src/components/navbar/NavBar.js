import React from 'react';
import LoginBar from './LoginBar';
import { withRouter } from 'react-router-dom';
import anabada_font from '../../images/anabada_font.svg';

function NavBar({ history }) {
	return (
		<div className='nav__container'>
			<div id='nav'>
				<img
					id='nav__logo'
					src={anabada_font}
					onClick={() => history.push('/')}
				/>
				<LoginBar />
			</div>
		</div>
	);
}

export default withRouter(NavBar);
