import axios from 'axios';

export const api = axios.create({
	baseURL: `https://mywebsiteappp.herokuapp.com/`,
});

export const apiImage = 'https://mywebsiteappp.herokuapp.com/img/';
