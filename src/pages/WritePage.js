import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { auth_confirm } from '../function/auth_confirm';
import noImg from '../images/noImg.png';

function WritePage({ history }) {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState(false);
	const [imgUrl, setImgUrl] = useState(false);
	const onImgHandler = (e) => {
		const Form = new FormData();
		Form.append('image', e.target.files[0]);
		const File = e.target.files[0];
		const FileUrl = URL.createObjectURL(File);
		setImgUrl(FileUrl);
		setFormData(Form);
	};

	const [_title, set_title] = useState('');
	const onTitleHandler = (e) => {
		set_title(e.currentTarget.value);
	};

	const [_price, set_price] = useState('');
	const onPriceHandler = (e) => {
		set_price(e.currentTarget.value);
	};

	const [_contents, set_contents] = useState('');
	const onDescHandler = (e) => {
		set_contents(e.currentTarget.value);
	};

	const onUploadHandler = () => {
		document.querySelector('#write__upload').click();
	};

	const onSubmitHandler = () => {
		axios
			.post('http://175.113.223.199:8080/api/image', formData)
			.then((res) => {
				console.log('이미지 등록 성공');
				if (res.data.resultCode === 'OK') {
					let req = {
						title: _title,
						price: Number(_price),
						contents: _contents,
						imgId: res.data.id,
					};
					axios.post('/board', req).then((res) => {
						console.log(res);
						if (res.data.resultCode === 'OK') {
							console.log('게시물 작성 성공');
							history.push('/');
						} else {
							console.log('이미지 전송 성공, 게시물 작성 실패');
							alert('게시물 작성에 실패했습니다.');
						}
					});
				}
			})
			.catch((err) => {
				console.log(err, '이미지 등록 실패');
				alert('이미지 등록에 실패했습니다');
			});
	};

	useEffect(() => {
		auth_confirm(dispatch, history, 'NO');
	}, []);

	return (
		<div className='container'>
			<h3>Post</h3>
			<div id='write__preview__container'>
				<img
					id='write__preview'
					src={imgUrl === false ? noImg : imgUrl}></img>
			</div>
			<div onClick={onUploadHandler} id='write__upload__fake'>
				이미지 업로드
			</div>
			<input
				onChange={onImgHandler}
				type='file'
				accept='.jpg,.png'
				id='write__upload'
			/>
			<input
				className='write__title'
				size='35'
				minLength='1'
				maxLength='50'
				placeholder='title'
				value={_title}
				onChange={onTitleHandler}
			/>
			<input
				type='number'
				max='10000000'
				step='1000'
				className='write__price'
				size='35'
				minLength='1'
				maxLength='30'
				placeholder='price'
				value={_price}
				onChange={onPriceHandler}
			/>
			<textarea
				type='text'
				className='write__desc'
				minLength='1'
				maxLength='800'
				placeholder='content'
				value={_contents}
				onChange={onDescHandler}
			/>
			<div id='write__button' onClick={onSubmitHandler}>
				POST
			</div>
		</div>
	);
}

export default withRouter(WritePage);
