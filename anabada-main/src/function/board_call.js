import axios from 'axios';
import { setting, update } from '../modules/contents';

export const board_call = (dispatch) => {
	axios
		.get(`/board?page=1`)
		// .get(`https://anabada.du.r.appspot.com/api/board?page=1`)
		.then((res) => {
			if (res.data.resultCode === 'OK') {
				console.log('보드 불러오기 성공');
				dispatch(setting(res.data.boards));
			}
		})
		.catch((error) => console.log(error, '보드 불러오기 실패'));
};
export const board_update = (dispatch, board_no) => {
	axios
		// .get(`https://anabada.du.r.appspot.com/api/board?page=${board_no}`)
		.get(`/board?page=${board_no}`)
		.then((res) => {
			if (res.data.resultCode === 'OK') {
				console.log('보드 업데이트 성공');
				dispatch(update(res.data.boards));
			}
		})
		.catch((error) => console.log(error, '보드 업데이트 실패'));
};
