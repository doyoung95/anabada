import axios from 'axios';
import { withRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Comments({ value, history }) {
	const [comments, setComments] = useState('');
	const [commentsNo] = useState(0);
	const [commentsList, setCommentsList] = useState([]);
	const [modify, setModify] = useState({ state: false, id: undefined });
	const auth = useSelector((state) => state.auth);

	const comments_load = () => {
		axios
			// .get(
			// 	`https://anabada.du.r.appspot.com/api/board/${value}/comment?page=${commentsNo}`
			// )
			.get(`/board/${value}/comment?page=${commentsNo}`)
			.then((res) => {
				if (res.data.resultCode === 'OK') {
					console.log('댓글 불러오기 성공');
					console.log(res);
					setCommentsList(res.data.comments);
				} else {
					console.log('댓글불러오기 실패');
				}
			})
			.catch((err) => console.error(err));
	};

	const onCommentsWriteHandler = (e) => {
		setComments(e.target.value);
	};

	const onCommentsHandler = () => {
		if (modify.state) {
			if (comments.length === 0) {
				alert('수정할 내용을 작성해 주세요.');
			} else {
				let req = { contents: comments };
				axios
					// .put(
					// 	`https://anabada.du.r.appspot.com/api/comment/${modify.id}`,
					// 	req
					// )
					.put(`/comment/${modify.id}`, req)
					.then((res) => {
						if (res.data.resultCode === 'OK') {
							console.log('댓글 수정 성공');
							setComments('');
							setModify({ state: false, id: undefined });
							comments_load();
						}
					})
					.catch((err) => console.error(err));
			}
		} else {
			if (auth.yes === 'yes') {
				if (comments.length === 0) {
					alert('수정할 내용을 작성해 주세요.');
				} else {
					let req = { boardId: value, contents: comments };
					axios
						// .post('https://anabada.du.r.appspot.com/api/comment', req)
						.post('/comment', req)
						.then((res) => {
							if (res.data.resultCode === 'OK') {
								console.log('댓글작성 성공');
								setComments('');
								comments_load();
							} else {
								console.log('댓글 작성 실패');
							}
						})
						.catch(console.error());
				}
			} else {
				alert('로그인 후 이용해 주세요');
				history.push('/login');
			}
		}
	};

	const onModifyHandler = (curId) => {
		setComments('');
		setModify({ state: true, id: curId });
	};

	const onDeleteHandler = (curId) => {
		if (window.confirm('정말 삭제하시겠습니까?')) {
			axios
				// .delete(`https://anabada.du.r.appspot.com/api/comment/${curId}`)
				.delete(`/comment/${curId}`)
				.then((res) => {
					if (res.data.resultCode === 'OK') {
						console.log('댓글 삭제 성공');
						setComments('');
						setModify({ state: false, id: undefined });
						comments_load();
					} else {
						console.log('댓글 삭제 실패');
					}
				})
				.catch((err) => console.error(err));
		}
	};

	let list = [];
	commentsList.map((cur, idx) => {
		let createdTime = cur.date;
		let time = `
		 ${createdTime.slice(0, 4)}.${createdTime.slice(5, 7)}.${createdTime.slice(
			8,
			10
		)}.${createdTime.slice(11, 16)}`;
		list.push(
			<div key={idx} className='commentsEach__container'>
				<div className='commentsEach__info'>
					{cur.author} | {time}
					{auth.yes !== undefined && cur.isMine && (
						<div className='commentsEach__modify'>
							<div onClick={() => onModifyHandler(cur.id)}>수정</div>|
							<div onClick={() => onDeleteHandler(cur.id)}>삭제</div>
						</div>
					)}
				</div>
				<pre className='commentsEach__contents'>{cur.contents}</pre>
			</div>
		);
	});

	useEffect(() => {
		comments_load();
	}, []);

	return (
		<div id='comments__container'>
			<span>댓글</span>
			<div id='comments__input__container'>
				<textarea
					id='comments__input'
					minLength='1'
					maxLength='200'
					onChange={onCommentsWriteHandler}
					placeholder={modify.state ? '수정' : '댓글'}
					value={comments}></textarea>
				{modify.state ? (
					<div className='comments__modify__button'>
						<div onClick={onCommentsHandler}>수정</div>
						<div
							onClick={() => {
								setModify({ state: false, id: undefined });
								setComments('');
							}}>
							취소
						</div>
					</div>
				) : (
					<div className='comments__button' onClick={onCommentsHandler}>
						작성
					</div>
				)}
			</div>
			<div id='commentsList__container'>
				{list.length > 0 ? list : empty}
			</div>
			<div></div>
		</div>
	);
}

export default withRouter(Comments);

const empty = (
	<div id='comments__empty'>
		아직 댓글이 없습니다.
		<br />첫 댓글을 남겨보세요!
	</div>
);
