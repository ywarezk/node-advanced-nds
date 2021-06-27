const { dbPromise, client } = require('./db');
const { expect } = require('chai');
const app = require('./app');
const axios = require('axios');

describe('users', () => {
	let db;
	let usersCollection;
	let postsCollection;
	let server;
	
	// connect to the database
	before(async () => {
		try {
			db = await dbPromise;
			
		} catch(err) {
			console.log(err);
		}
		
	})
	
	before((done) => {
		server = app.listen(3000, () => {
			done();
		})
	})
	
	// load few document to the users collection
	beforeEach(async () => {
		// db.createCollection('users', {
		// 	validator: {
		// 		$jsonSchema: {
        //  			bsonType: "object",
        //  			required: [ "firstName", "lastName", "images"],
		// 			properties: {
		// 				images: {
		// 					bsonType: 'array',
							
		// 				}
		// 			}
		// 		}
		// 	}
		// })
		
		usersCollection = db.collection('users');
		// db.createCollection
		
		postsCollection = db.collection('posts');
		
		const { insertedIds } = await usersCollection.insertMany([
			{ firstName: 'Yariv', lastName: 'Katz', images: [
				'image1', 
				'image2'
			] },
			{ firstName: 'Omer', lastName: 'write with no bugs dont need tests'},
			{ firstName: 'Avital', lastName: 'Bichman'},
		]);
		
		await postsCollection.insertMany([
			{message: 'hello', userId: insertedIds[0], date: new Date()},
			{message: 'world', userId: insertedIds[0], date: new Date()},
			{message: 'foo', userId: insertedIds[0], date: new Date()},
		])
	})
	
	
	
	after(() => {
		server.close();
	})
	
	afterEach(async () => {
		await usersCollection.drop();
		await postsCollection.drop();	
	})
	
	after(async () => {
		await client.close();
	});
	
	it('verify we have 3 users', async () => {
		const users = await usersCollection.find().toArray();
		expect(users.length).to.equal(3);
	});
	
	it.only('get all users', async () => {
		const response = await axios.get('http://localhost:3000/api/users');
		expect(response.status).to.equal(200);
		expect(response.data.length).to.equal(3);
		expect(response.data[0].posts.length).to.equal(3);
		// expect(response.data[0].posts[0].message)
	});
})