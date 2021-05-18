import React from 'react';
import { useDispatch } from 'react-redux';
import { click } from '../../../modules/write_button';
export default function Confirm() {
	const dispatch = useDispatch();
	return (
		<div
			onClick={() => {
				dispatch(click(true));
			}}>
			완료
		</div>
	);
}
