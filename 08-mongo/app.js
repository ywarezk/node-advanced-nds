/**
create express application
with get => /api/users
 */
 
const express = require('express');
const { dbPromise } = require('./db');

const app = express();

/*

1:1

{
		firstName: 'no tests', 
		lastName: 'omer', 
		userSettings: {
			email: '',
			avatar: ''	
		},
		posts: [
			{
				_id
				message	
			},
			
			
			{ message: '...', date: new Date(), ...}
		]
	}

1:m
M2M


{
	message: '',
	date,
	userId
}

[ 
	{
		firstName: 'no tests', 
		lastName: 'omer', 
		posts: [
			{ message: '...', date: new Date()}
		]
	}
]

*/
app.get('/api/users', async (req, res) => {
	try {
		const db = await dbPromise;
		const usersCollection = db.collection('users');
		usersCollection.find({
			firstName: 'Yariv'
		})
		const users = await usersCollection.aggregate([
			{
				$lookup: {
					from: 'posts',
					localField: '_id',
					foreignField: 'userId',
					as: 'posts'
				}
			}
		]).toArray();
		res.status(200).json(users);	
	} catch(err) {
		res.status(500).json({ error: 'something happened', code: 1040})
	}
	
	/*
	res.json([
		{firstName: 'Yariv', lastName: 'katz'}
	])
	*/	
})

// id is a number
// id string => 404
app.get('/api/users/:id', async (req, res) => {
})

module.exports = app;