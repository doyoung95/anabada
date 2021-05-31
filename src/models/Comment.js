export default class Comment {
	constructor(data) {
		this.id = data.id;
		this.author = data.author;
		this.contents = data.contents;
		this.date = data.date;
		this.isMine = data.isMine;
	}
}
