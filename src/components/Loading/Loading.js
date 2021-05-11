import React from 'react';
import loading from '../../images/loading.png';

export default function Loading() {
	return (
		<div id='loading__container'>
			<img alt='' id='loading__img' src={loading} />
			<div id='loading'>Loading. . .</div>
		</div>
	);
}
