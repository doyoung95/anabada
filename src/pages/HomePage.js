import React from 'react';
import Contents from '../components/contents/Contents';
import { useSelector } from 'react-redux';
function HomePage() {
	const contents = useSelector((state) => state.contents);

	return (
		<div
			style={{
				width: '100vh',
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
				{contents.map((contents, idx) => (
					<Contents data={contents} no={idx} />
				))}
			</div>
		</div>
	);
}

export default HomePage;
