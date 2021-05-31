export default class User {
	constructor(data) {
		this.id = null;
		this.nickname = data.nickname;
		this.uid = data.uid;
		this.email = null;
		this.userImg = null;
	}
}
