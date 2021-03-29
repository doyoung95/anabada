import React from 'react';
import { withRouter } from 'react-router-dom';

function Footer({ history }) {
	return (
		<div id='footer__container'>
			<span>앱을 이용하면 더 편리하게 사용할 수 있습니다.</span>
			<div id='footer__writeButton' onClick={() => history.push('/write')}>
				+ 작성
			</div>
		</div>
	);
}

export default withRouter(Footer);
