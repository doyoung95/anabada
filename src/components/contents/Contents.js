import React from 'react';
import Logo from '../../images/anabada.png';
import { useHistory } from 'react-router-dom';

function Contents({ contents }) {
	const history = useHistory();
	const onClickHandler = () => {
		history.push(`/content/${contents.id}`);
	};

	return (
		<div
			onClick={onClickHandler}
			style={{
				cursor: 'pointer',
				width: '300px',
				height: '300px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				textAlign: 'left',
			}}>
			<img
				alt=''
				style={{ width: '300px', height: '200px' }}
				src={contents.thumbImg}
			/>
			<div style={{}}>
				<div>{contents.title}</div>
				<div> 가격 : {contents.price}</div>
			</div>
		</div>
	);
}

export default Contents;
