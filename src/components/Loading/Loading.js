import React from 'react';
import { useSelector } from 'react-redux';
import loadingImg from '../../images/loading.png';

export default function Loading() {
	const loading = useSelector((state) => state.loading);
	return loading ? (
		<div id='loading__container'>
			<img alt='' id='loading__img' src={loadingImg} />
			<div id='loading'>Loading. . .</div>
		</div>
	) : (
		<div></div>
	);
}
