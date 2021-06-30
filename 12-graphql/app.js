/**

Express graphql server

 */
 
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { MongoClient } = require('mongodb');

const app = express();

const client = new MongoClient('mongodb://yariv:12345678@localhost:27017');

client.connect()
	.then(
		() => {
			console.log('we are now connected to mongo');
		}, 
		() => {
			console.log('failed to connect to mongo');
		}
	)

// /graphql
const apolloServer = new ApolloServer({
	typeDefs: gql`
		type Post {
			message: String
			date: Float
		}
	
		type User {
			firstName: String
			lastName: String
			posts: [Post]
		}
	
		type Query {
			me: User!
		}	
		
			
	`,
	resolvers: {
		Query: {
			me: async () => {
				const db = client.db('graphql-example');
				const users = db.collection('users');
				// const usersArray = await users.aggregate([
				// 	{ $match: { firstName: "Yariv" } },
				// 	// {
				// 	// 	$lookup: {
				// 	// 		from: 'posts',
				// 	// 		localField: '_id',
				// 	// 		foreignField: 'userId',
				// 	// 		as: 'posts'
				// 	// 	}
				// 	// }
				// ]).toArray();
				
				const usersArray = await users.find().toArray();
				
				return usersArray[0];
			}
		}
	}
});

app.get('/api/users', () => {
	
})

apolloServer.applyMiddleware({app});


app.listen(3000, () => {
	console.log('now listening');
})