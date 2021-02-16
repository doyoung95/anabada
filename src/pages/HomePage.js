import React, { useState } from 'react';
import Contents from '../components/contents/Contents';
import { useSelector, useDispatch } from 'react-redux';

function HomePage({ history }) {
	const contents = useSelector((state) => state.contents);
	let list = [];
	for (var i = 1; i < 12; i++) {
		if (contents.length < i) {
			break;
		}
		list.push(<Contents contents={contents[i - 1]} />);
	}
	return (
		<div
			style={{
				width: '100vh ',
				height: '80vh',
				margin: '0px 80px 0px 80px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<div
				style={{
					padding: '40px',
					boxSizing: 'border-box',
					display: 'grid',
					gridTemplateRows: 'repeat(auto-fill,minmax(20%,auto))',
					gridTemplateColumns: 'repeat(auto-fill,minmax(30%,auto))',
					rowGap: '40px',
					columnGap: '40px',
					width: '100vh',
					height: '80vh',
				}}>
				{list}
			</div>
		</div>
	);
}

export default HomePage;
