const { ApolloServer, gql } = require('apollo-server-lambda');

const server = new ApolloServer({
	typeDefs: gql`
		type Query {
			hello: String
		}
	`,
	resolvers: {
		Query: {
			hello() {
				return 'World';
			},
		},
	},
});

exports.handler = server.createHandler();
