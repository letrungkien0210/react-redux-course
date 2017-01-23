const _fakeServerApi = {
	//imitate the server API
	increaseCount: ( currentCount, cb) => {
		setTimeout(() => {
			cb(currentCount + 1);
		}, 2000);
	}
}