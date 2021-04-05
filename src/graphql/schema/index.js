import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import * as userQueries from '../queries/user.queries.js';
import * as userMutations from '../mutations/user.mutations.js';

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'queries',
		fields: () => ({ ...userQueries.userLoginQuery }),
	}),
	mutation: new GraphQLObjectType({
		name: 'mutations',
		fields: () => ({ ...userMutations.userRegistrationMutation }),
	}),
});

export default schema;
