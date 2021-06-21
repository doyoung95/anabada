export default class User {
	constructor(userInputData) {
		this.user = {};
		for (var key in userInputData) {
			this.user[key] = userInputData[key];
		}
	}

	getData() {
		return this.user;
	}
}
