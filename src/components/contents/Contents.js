import React from 'react';
import Logo from '../../images/anabada.png';
import { useHistory } from 'react-router-dom';
import { contents_click } from '../../modules/view';
import { useDispatch } from 'react-redux';

function Contents({ contents }) {
	const dispatch = useDispatch(contents_click);
	const history = useHistory();
	const onClickHandler = () => {
		dispatch(contents_click(contents));
		history.push('/content');
	};

	return (
		<div
			onClick={onClickHandler}
			style={{
				cursor: 'pointer',
				width: '30vh',
				height: '20vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}>
			<img alt='' style={{ width: '250px', height: '200px' }} src={Logo} />
			<div
				style={{
					width: '250px',
					backgroundColor: 'gray',
					color: 'white',
				}}>
				{contents.title}
				<br />
				가격 : {contents.price}
			</div>
		</div>
	);
}

export default Contents;
