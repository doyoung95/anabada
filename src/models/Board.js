import { getAllBoard } from '../controller/board';

export default class Board {
	constructor() {
		this.list = [
			{
				id: 1,
				title: '왕사탕 팔아요~',
				date: '2021-06-17 17:56:27',
				price: 1500,
				author: '민재킴',
				thumbImg: 'http://123.456.789/img/thumb.jpg',
				isMine: false,
			},
			{
				id: 2,
				title: '새 책 팔아요~',
				date: '2021-05-27 10:06:13',
				price: 10000,
				author: '야옹',
				thumbImg: 'http://123.456.789/img/thumb.jpg',
				isMine: true,
			},
		];
		this.detail = [
			{
				id: 1,
				title: '왕사탕 팔아요~',
				date: '2021-06-17 17:56:27',
				price: 1500,
				author: '민재킴',
				isMine: false,
				contents:
					'상세 내용 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구',
				detailImg: 'http://123.456.789/img/detail.jpg',
			},
			{
				id: 2,
				title: '새 책 팔아요~',
				date: '2021-05-27 10:06:13',
				price: 10000,
				author: '야옹',
				isMine: true,
				contents:
					'상세 내용 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구',
				detailImg: 'http://123.456.789/img/detail.jpg',
			},
		];
	}

	getAllFromServer = () => {
		getAllBoard()
			.then((res) => console.log(res))
			.catch(console.error);
	};

	getAll = () => {
		return this.list;
	};

	getDetailById = (id) => {
		return this.detail.find((el) => el.id == id);
	};
}
