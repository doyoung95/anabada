import React from 'react';
import LoginBar from './LoginBar';
import anabada from '../../images/anabada-w.png';
import { withRouter } from 'react-router-dom';

function NavBar({ history }) {
	return (
		<div
			style={{
				boxSizing: 'border-box',
				width: '90vh',
				padding: '20px',
				display: 'flex',
				justifyContent: 'space-between',
				backgroundColor: '#99cccc',
				color: 'white',
				borderBottom: '1px solid',
			}}>
			<img
				alt=''
				style={{ margin: '10px', cursor: 'pointer' }}
				src={anabada}
				onClick={() => history.push('/')}></img>
			<LoginBar />
		</div>
	);
}

export default withRouter(NavBar);
