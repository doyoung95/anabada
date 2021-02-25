import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create } from '../modules/contents';
import { withRouter } from 'react-router-dom';
import LoginPage from './LoginPage';

function WritePage({ history }) {
	const [_title, set_title] = useState('');
	const onTitleHandler = (e) => {
		set_title(e.currentTarget.value);
	};

	const [_price, set_price] = useState('');
	const onPriceHandler = (e) => {
		set_price(e.currentTarget.value);
	};

	const [_desc, set_desc] = useState('');
	const onDescHandler = (e) => {
		set_desc(e.currentTarget.value);
	};

	const dispatch = useDispatch(create);
	const auth = useSelector((state) => state.auth);
	let data = { id: auth.id, title: _title, price: _price, desc: _desc };
	const onSubmitHandler = () => {
		if (_title.length < 1) {
			alert('제목을 입력해주세요.');
		} else if (_price.length < 1) {
			alert('가격을 입력해주세요.');
		} else {
			dispatch(create(data));
			history.push('/');
		}
	};

	const inputRef = useRef();
	useEffect(() => {
		if (auth.yes !== 'yes') {
			alert('로그인 후 이용해 주세요.');
		} else {
			inputRef.current.focus();
		}
	}, []);

	return (
		(auth.yes !== 'yes' && history.push('/login')) ||
		(auth.yes === 'yes' && (
			<div className='container'>
				<div className='write_container'>
					<h3>게시물 작성하기!</h3>
					<input
						ref={inputRef}
						className='write_title'
						size='35'
						maxLength='12'
						placeholder='제목'
						value={_title}
						onChange={onTitleHandler}
					/>
					<input
						type='number'
						max='10000000'
						step='1000'
						className='write_price'
						size='35'
						maxLength='30'
						placeholder='가격'
						value={_price}
						onChange={onPriceHandler}
					/>
					<textarea
						type='text'
						className='write_desc'
						maxLength='30'
						placeholder='내용'
						value={_desc}
						onChange={onDescHandler}
					/>
					<div id='click_button' onClick={onSubmitHandler}>
						작성하기
					</div>
				</div>
			</div>
		))
	);
}

export default withRouter(WritePage);
