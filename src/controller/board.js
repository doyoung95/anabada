import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://anabada.du.r.appspot.com/api/board',
	headers: { withCredentials: true },
});

const errorMessage = () => {
	window.alert('서버가 응답하지 않습니다. 잠시 후 다시 시도해주세요.');
};

export const getAllBoard = async () => {
	return await instance.get('/').catch(errorMessage);
};

export const getBoardById = async (id) => {
	return await instance.get(`/${id}`).catch(errorMessage);
};
export const getCommentListByBoardId = async (id) => {
	return await instance.get(`/${id}/comment`).catch(errorMessage);
};
export const createBoard = async (id) => {
	return await instance.post('/').catch(errorMessage);
};
// export const commentListByBoardId = async (id) => {
// 	const response = await instance.get(`/${id}/comment`).catch(console.error);
// 	return response;
// };
// export const commentListByBoardId = async (id) => {
// 	const response = await instance.get(`/${id}/comment`).catch(console.error);
// 	return response;
// };
