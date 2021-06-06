const express = require('express');
const safePromise = require('./safe-promise.middleware');
const axios = require('axios');

const app = express();


app.use(safePromise());

app.get('/api/todo', async (req, res) => {
	const response = await axios.get('http://nztodo.herokuapp.com/api/tasks1/?format=json');	
	res.json(response.data);	
});

app.listen(3000, () => {
	console.log('now listening 3000...');
})