import axios from 'axios';

class User {
	constructor() {
		this.api = axios.create({
			baseURL: 'http://localhost:3000',
		});
	}

	list() {
		return this.api.get('/users').then(res => res.data);
	}

	find(id) {
		return this.api.get(`/users/${id}`).then(res => res.data);
	}
}

export default new User();
