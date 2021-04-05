'use strict';
/**
 * api's status
 * 200 when run api successfully
 * 400 when run un-successfully or something invalid inputs
 */
const someWentWrong = {
	status: 400,
	message: 'Something went wrong.',
};

const wrongCredentials = {
	status: 400,
	message: 'Invalid credentials.',
};

export { someWentWrong, wrongCredentials };
