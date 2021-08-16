import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://minjae-server.appspot.com/api/user',
	headers: { withCredentials: true },
	timeout: 2000,
});
const errorMessage = () => {
	window.alert('서버가 응답하지 않습니다. 잠시 후 다시 시도해주세요.');
	return new Error('Server Error');
};

export const authCheck = async () => {
	return await instance.get('/').catch({ data: { success: false } });
};

export const signup = async (userInputData) => {
	return await instance.post('/signup', userInputData).catch(errorMessage);
};

export const login = async (userInputData) => {
	return await instance.post('/login', userInputData).catch(errorMessage);
};

export const logout = async () => {
	return await instance.get('/logout').catch(errorMessage);
};
