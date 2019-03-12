import axios from 'axios';

export const grantAccess = axios.create({
	baseURL: 'https://skillshareapi.herokuapp.com',
	validateStatus: function (status) {
    return status < 400; // default
 	}
})
export const myAPI = axios.create({
	baseURL: 'https://skillshareapi.herokuapp.com'
})