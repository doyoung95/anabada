import axios from 'axios';

const instance = axios.create({
	baseURL: '/api/user',
	withCredentials: true,
});
const errorMessage = () => {
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
