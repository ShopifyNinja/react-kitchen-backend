'use strict';
import bcrypt from 'bcrypt';
import { try_catch_error } from './error.messages.js';

export const passwordConverter = async (password) => {
	try {
		const hash = await bcrypt.hash(password, 10);
		return hash;
	} catch (err) {
		console.log(`${try_catch_error}passwordConverter`, err);
		return '';
	}
};

export const comparePassword = async (data) => {
	try {
		const { password, hash } = data;
		const isMatched = await bcrypt.compare(password, hash);
		return isMatched;
	} catch (err) {
		console.log(`${try_catch_error}comparePassword`, err);
		return false;
	}
};
