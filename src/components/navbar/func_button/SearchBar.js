import React from 'react';
import search from '../../../images/button/search.svg';
import slider from '../../../images/button/sliders.svg';

export default function SearchBar() {
	return (
		<div>
			<img className='nav__icon' src={search} />
			<img className='nav__icon' src={slider} />
		</div>
	);
}
