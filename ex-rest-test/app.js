/**
create express application
with get => /api/users
 */
 
const express = require('express');
const { dbPromise } = require('./db');

const app = express();

app.get('/api/users', async (req, res) => {
	try {
		const db = await dbPromise;
		const usersCollection = db.collection('users');
		const users = await usersCollection.find().toArray();
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