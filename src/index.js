const { GraphQLServer } = require('graphql-yoga');
const dbUser = require('./models/user-model');

const typeDefs = `
	type Query {
		hello(name: String): String!
		users: [User]!
		user(where: whereUserInput!): User!
	}

	type Mutation {
		createUser(data: UserInput!): User!
	}

	type User{
		id: ID!
		firstName: String!
		lastName: String!
		tel: String!
	}

	input UserInput {
		firstName: String!
		lastName: String!
		tel: String!
	}

	input whereUserInput {
		id: ID!
	}

`;

const resolvers = {
	Query: {
		hello: (_, { name }) => `Hello ${name || 'world'}`,

		async users(parent, args, ctx, info) {
			const users = await ctx.db.dbUser.find({});
			return users;
		},
		async user(parent, args, ctx, info) {
			const id = args.where.id
			const user = await ctx.db.dbUser.findOne({_id: id});
			return user;
		}
	},
	Mutation: {
		async createUser(parent, args, ctx, info) {
			const userInput = args.data;
			const userCreated = await ctx.db.dbUser.create({ ...userInput });

			return userCreated;
		}
	}
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    db: { dbUser }
  })
});
server.start(() => console.log('server running in port 4000'));