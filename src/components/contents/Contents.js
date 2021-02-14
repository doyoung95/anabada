import React from 'react';
import Logo from '../../images/anabada.png';

function Contents(props) {
	return (
		<div
			style={{
				width: '33vh',
				height: '20vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}>
			<img alt='' style={{ width: '250px', height: '200px' }} src={Logo} />
			<div
				style={{
					width: '250px',
					backgroundColor: 'violet',
					color: 'white',
				}}>
				작성자 : {props.data.id} 제목 : {props.data.title} 가격 :
				{props.data.price}
			</div>
		</div>
	);
}

export default Contents;
