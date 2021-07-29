export const timeSet = (Time) => {
	let created = new Date(Time);
	let now = new Date();
	let diff = Math.floor((now - created) / 1000);
	let criteria = [31536000, 2592000, 86400, 3600, 60];
	let filter = ['년', '개월', '일', '시간', '분'];
	if (diff === 0) {
		return '방금전';
	}
	if (diff < 60) {
		return diff + '초 전';
	}
	for (var i = 0; i < 5; i++) {
		let result = Math.floor(diff / criteria[i]);
		if (criteria[i] < diff) {
			return result + filter[i] + ' 전';
		}
	}
};
