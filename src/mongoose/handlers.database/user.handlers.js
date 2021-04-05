'use strict';
import userModel from '../models.database/user.model.js';
import { db_error, try_catch_error } from '../../common/error.messages.js';

const userCreate = async (data) => {
	let user = false;
	try {
		await new userModel(data)
			.save()
			.then((res) => {
				user = { ...JSON.parse(JSON.stringify(res)) };
			})
			.catch((err) => {
				console.log(`${db_error}userCreate`, err);
			});
		return user;
	} catch (err) {
		console.log(`${try_catch_error}userCreate`, err);
		return user;
	}
};

const userFindOne = async (cond) => {
	let user = false;
	try {
		await userModel
			.findOne(cond)
			.then((res) => {
				if (res) {
					user = { ...JSON.parse(JSON.stringify(res)) };
				}
			})
			.catch((err) => {
				console.log(`${db_error}userFindOne`, err);
			});
		return user;
	} catch (err) {
		console.log(`${try_catch_error}userFindOne`, err);
		return user;
	}
};

export { userCreate, userFindOne };
