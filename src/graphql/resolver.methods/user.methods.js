import * as userHandler from '../../mongoose/handlers.database/user.handlers.js';
import { try_catch_error } from '../../common/error.messages.js';
import { someWentWrong, wrongCredentials } from '../../common/responses.js';
import { passwordConverter, comparePassword } from '../../common/password.js';

export const userCreator = async (args) => {
	try {
		const { name, email, role, password } = args;
		const user = await userHandler.userFindOne({ email });
		if (user) {
			return {
				status: 400,
				message: 'Email already used.',
			};
		}
		const hash = await passwordConverter(password);
		const newUser = await userHandler.userCreate({
			name,
			email,
			role,
			password: hash,
		});
		return {
			id: newUser._id,
			name: newUser.name,
			email: newUser.email,
			role: newUser.role,
			status: 200,
			message: 'User registered successfully.',
		};
	} catch (err) {
		console.log(`${try_catch_error}userCreator`, err);
		return someWentWrong;
	}
};

export const userLogin = async (args) => {
	try {
		const { email, password } = args;
		const user = await userHandler.userFindOne({ email });
		if (!user) return wrongCredentials;

		const isMatched = await comparePassword({ password, hash: user.password });
		if (!isMatched) return wrongCredentials;

		return {
			id: user._id,
			name: user.name,
			email: user.email,
			role: user.role,
			status: 200,
			message: 'User login successfully.',
		};
	} catch (err) {
		console.log(`${try_catch_error}userLogin`, err);
		return someWentWrong;
	}
};
