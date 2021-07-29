import React from 'react';
import { useSelector } from 'react-redux';
import setting from '../../../images/button/setting.svg';

export default function Setting() {
	const { isAuth } = useSelector((state) => state.auth);
	return <>{isAuth && <img alt='' className='nav__icon' src={setting} />}</>;
}
