import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create } from '../modules/contents';
import { withRouter } from 'react-router-dom';

function WritePage({ history }) {
	const [_title, set_title] = useState('');
	const [_price, set_price] = useState('');
	const [_desc, set_desc] = useState('');

	const onTitleHandler = (e) => {
		set_title(e.currentTarget.value);
	};
	const onPriceHandler = (e) => {
		set_price(e.currentTarget.value);
	};
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

	switch (auth.id !== undefined) {
		case false:
			history.push('/');

		case true:
			return (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
						height: '80vh',
					}}>
					<div style={{ width: '100%', height: '80vh' }}>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}>
							<h3>게시물 작성하기!</h3>
							<input
								style={{ margin: '10px', height: '30px', fontSize: '18px' }}
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
								style={{
									margin: '10px',
									height: '30px',
									fontSize: '18px',
									width: '354px',
								}}
								size='35'
								maxLength='30'
								placeholder='가격'
								value={_price}
								onChange={onPriceHandler}
							/>

							<textarea
								type='password'
								style={{
									resize: 'none',
									margin: '10px',
									height: '50vh',
									fontSize: '18px',
									width: '30vw',
								}}
								maxLength='30'
								placeholder='내용'
								value={_desc}
								onChange={onDescHandler}
							/>
							<div
								style={{
									cursor: 'pointer',
									width: '362px',
									height: '48px',
									backgroundColor: '#30cccc',
									color: 'white',
									textAlign: 'center',
									lineHeight: '47px',
									fontWeight: 'bold',
									fontSize: '17px',
								}}
								onClick={onSubmitHandler}>
								작성하기
							</div>
						</div>
					</div>
				</div>
			);
		default:
			history.push('/');
	}
}

export default withRouter(WritePage);
