import axios from 'axios';
import { setting } from '../modules/contents';

export const board_call = (dispatch, board_no, N) => {
	axios
		.get(`/board?page=${board_no + N}`)
		.then((res) => {
			if (res.data.resultCode === 'OK') {
				console.log('보드 불러오기 성공');
				dispatch(setting(res.data.boards));
			}
		})
		.catch((error) => console.log(error, '보드 불러오기 실패'));
};
