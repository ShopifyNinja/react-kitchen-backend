import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';

export const userType = new GraphQLObjectType({
	name: 'userType',
	description: 'User login details',
	fields: {
		id: {
			type: GraphQLString,
			description: 'The id of the user.',
		},
		name: {
			type: GraphQLString,
			description: 'The name of the user.',
		},
		email: {
			type: GraphQLString,
			description: 'The email of the user.',
		},
		role: {
			type: GraphQLString,
			description: 'The role of the user.',
		},
		status: {
			type: GraphQLInt,
			description: 'status',
		},
		message: {
			type: GraphQLString,
			description: 'message',
		},
	},
});
