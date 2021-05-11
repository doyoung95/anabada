import React from 'react';
import { useSelector } from 'react-redux';
import LoginBar from './LoginBar';
import { withRouter } from 'react-router-dom';
import anabada_font from '../../images/anabada_font.svg';
import myPage from '../../images/myPage.svg';
import { auth_confirm } from '../../function/auth_confirm';

function NavBar({ history }) {
	const auth = useSelector((state) => state.auth);

	return (
		<div className='nav__container'>
			{auth.yes === 'yes' && (
				<img
					onClick={() => history.push('/mypage')}
					id='nav__myPage__icon'
					alt=''
					src={myPage}
				/>
			)}
			<div id='nav'>
				<img
					alt=''
					id='nav__logo'
					src={anabada_font}
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				/>
				<LoginBar />
			</div>
		</div>
	);
}

export default withRouter(NavBar);
