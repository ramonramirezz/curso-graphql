const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
	type Query {
		hello(name: String): String!
	}

`;

const resolvers = {
	Query: {
		hello: (_, { name }) => `Hello ${name || 'Ramon'}`,
	},
}

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log('server running in port 4000'));