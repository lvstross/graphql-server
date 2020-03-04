import axios from 'axios';

class BaseModel {
	constructor() {
		this.api = axios.create({
			baseURL: 'http://localhost:3000',
		});
		this.model = '';
	}

	all() {
		return this.api.get(`/${this.model}`)
			.then(res => res.data);
	}

	find(id) {
		return this.api.get(`/${this.model}/${id}`)
			.then(res => res.data);
	}

	create(data) {
		data.friends = data.friends
		  ? data.friends.map(id => ({ id }))
		  : [];

		return this.api.post(`/${this.model}`, data)
			.then(res => res.data);
	}

	update(id, data) {
		return this.api.patch(`/${this.model}/${id}`, data)
			.then(res => res.data);
	}

	delete(id) {
		return this.api.delete(`/${this.model}/${id}`)
			.then(() => ({ id }));
	}
}

export default BaseModel;
