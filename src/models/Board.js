export default class Board {
	constructor(data) {
		this.id = data.id;
		this.title = data.title;
		this.date = data.date;
		this.price = data.price;
		this.author = data.author;
		this.boardImg = data.boardImg;
		this.contents = data.contents;
		this.isMine = data.isMine;
		this.viewCount = data.viewCount;
		this.commentCount = data.commentCount;
		this.likeCount = data.likeCount;
		this.status = data.status;
		this.locationX = data.locationX;
		this.locationY = data.locationY;
		this.locationDetail = data.locationDetail;
		this.comments = data.comments;
	}
}
