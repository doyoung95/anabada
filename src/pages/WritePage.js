import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import reload from '../images/reload.svg';
import camera from '../images/camera.svg';
import { click } from '../modules/write_button';

function WritePage({ history }) {
	const dispatch = useDispatch();
	const modify_data = useSelector((state) => state.modify_data);
	const write_button = useSelector((state) => state.write_button);
	const location = useSelector((state) => state.location);
	let curLocation = `${location.second} ${location.third}`;

	const [formData, setFormData] = useState(false);
	const [imgUrl, setImgUrl] = useState(false);
	const onImgHandler = (e) => {
		const Form = new FormData();
		Form.append('image', e.target.files[0]);
		const File = e.target.files[0];
		if (File) {
			const FileUrl = URL.createObjectURL(File);
			setImgUrl(FileUrl);
		}
		setFormData(Form);
	};

	const [_title, set_title] = useState('');
	const onTitleHandler = (e) => {
		set_title(e.currentTarget.value);
	};

	const [_price, set_price] = useState('');
	const onPriceHandler = (e) => {
		set_price(e.currentTarget.value.replace(price_regExp, ''));
	};

	const [_contents, set_contents] = useState('');
	const onDescHandler = (e) => {
		set_contents(e.currentTarget.value);
	};

	const onUploadHandler = () => {
		document.querySelector('#write__upload').click();
	};

	useEffect(() => {
		if (write_button) {
			// axios
			// 	.post('http://175.113.223.199:8080/api/image', formData)
			// 	.then((res) => {
			// 		console.log('이미지 등록 성공', res);
			// if (res.data.resultCode === 'OK') {
			let req = {
				title: _title,
				price: Number(_price),
				contents: _contents,
				imgId: '',
				// res.data.id,
			};
			console.log(req);
			if (modify_data[0]) {
				// 게시물 수정 코드
				axios
					// .put(
					// 	`https://anabada.du.r.appspot.com/api/board/${modify_data[2]}`,
					// 	req
					// )
					.put(`/board/${modify_data[2]}`, req)
					.then((res) => {
						console.log(res);
						if (res.data.resultCode === 'OK') {
							console.log('게시물 수정 완료');
						} else {
							console.log('게시물 수정 실패');
						}
					})
					.catch((err) => console.log(err, '게시물 수정 실패'));
			} else {
				// 게시물 업로드 코드
				// axios;
				// .post('https://anabada.du.r.appspot.com/api/board', req)
				// .then((res) => {
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
			// }
		}
		// })
		// .catch((err) => {
		// 	console.log(err, '이미지 등록 실패');
		// 	alert('이미지 등록에 실패했습니다');
		// });
		dispatch(click(false));
	}, [write_button]);
	console.log(location);
	useEffect(() => {
		if (modify_data[0]) {
			set_title(modify_data[1].title);
			set_price(modify_data[1].price);
			set_contents(modify_data[1].contents);
			setImgUrl(modify_data[1].detailImg);
		}
	}, []);

	return (
		<div className='container'>
			<div id='write__preview__container'>
				<div onClick={onUploadHandler} id='write__upload__fake'>
					<img alt='' src={camera} />
					<div>{!imgUrl ? 0 : 1} / 1</div>
				</div>
				<img
					alt=''
					id='write__preview'
					src={imgUrl === false ? '' : imgUrl}></img>
			</div>
			<input
				onChange={onImgHandler}
				type='file'
				accept='.jpg,.png'
				id='write__upload'
			/>
			<div id='write__location__container'>
				현재 위치
				<div id='write__location'>
					{curLocation}
					<div
						id='write__location__button'
						onClick={() => history.push('/map')}>
						<img alt='' id='write__location__icon' src={reload} />
						동기화
					</div>
				</div>
			</div>
			<input
				className='write__title'
				size='35'
				minLength='1'
				maxLength='50'
				placeholder='제목'
				value={_title}
				onChange={onTitleHandler}
			/>
			<div id='write__price__fake'>
				{_price.length === 0 ? '' : Number(_price).toLocaleString('ko') + '원'}
			</div>
			<input
				type='text'
				className='write__price'
				size='35'
				minLength='1'
				maxLength='8'
				placeholder='₩ 가격'
				value={_price}
				onChange={onPriceHandler}
			/>
			<textarea
				type='text'
				className='write__desc'
				minLength='1'
				maxLength='800'
				placeholder='게시글 내용을 작성해주세요.'
				value={_contents}
				onChange={onDescHandler}
			/>
		</div>
	);
}

export default withRouter(WritePage);

let price_regExp = /[^0-9,]/i;
