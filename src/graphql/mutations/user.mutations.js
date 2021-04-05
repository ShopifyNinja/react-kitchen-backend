import { GraphQLString, GraphQLNonNull } from 'graphql';
import * as userTypes from '../types/user.types.js';
import * as userMethods from '../resolver.methods/user.methods.js';

export const userRegistrationMutation = {
	userRegistration: {
		type: userTypes.userType,
		args: {
			name: {
				type: new GraphQLNonNull(GraphQLString),
				description: 'The name of the user.',
			},
			role: {
				type: new GraphQLNonNull(GraphQLString),
				description: 'The role of the user.',
			},
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
			return userMethods.userCreator(args);
		},
	},
};
