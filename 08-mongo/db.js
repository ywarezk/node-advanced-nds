/**

connect to our mongo database

 */

// { MongoClient}
const { MongoClient } = require('mongodb');

// MongoClient.connect
const client = new MongoClient(
	process.env.DATABASE_URL
	// 'mongodb://yariv:12345678@localhost:27017'
)

/**
 * 
 * @returns {Promise<MongoClient.db>}
 */
async function main() {
	try {
		await client.connect();
		const db = client.db(process.env.DATABASE_NAME);
		db.createCollection
		// db.collection('users').insertMany
		console.log('connected...');	
		return db;
	} catch(err) {
		console.log('failed to connect')
	}
	
}

// module.exports = main;

const db = main();

/** @type {client: any, dbPromise: Promise<MongoClient.db>} */
module.exports = {
	client,
	dbPromise: db
};