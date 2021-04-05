import { GraphQLString, GraphQLNonNull } from 'graphql';
import * as userTypes from '../types/user.types.js';
import * as userMethods from '../resolver.methods/user.methods.js';

export const userLoginQuery = {
	userLogin: {
		type: userTypes.userType,
		args: {
			email: {
				type: new GraphQLNonNull(GraphQLString),
				description: 'The email of the user.',
			},
			password: {
				type: new GraphQLNonNull(GraphQLString),
				description: 'The password of the user.',
			},
		},
		resolve: (root, args) => {
			return userMethods.userLogin(args);
		},
	},
};
