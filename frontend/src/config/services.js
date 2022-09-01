import http from './http-common';

class DataService {
	getAll() {
		return http.get('/provider');
	}
	get(id) {
		return http.get(`/provider/${id}`);
	}
	findByZip(zip) {
		return http.get(`/provider?zip=${zip}`);
	}
}

export default new DataService();
