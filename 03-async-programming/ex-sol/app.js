
const expressCreateApp = require('express');
const axios = require('axios');

const app = expressCreateApp();

// app.get('/api/todo/:id(\\d+)', (req, res) => {
// 	res.status(401).send('hello world');
// })

app.get('/api/todo', async (req, res) => {
	// Promise<Response>
	const response = await axios.get('http://nztodo.herokuapp.com/api/tasks/?format=json');		
	
	// Content-Type: application/json 
	// [{title: ''}]
	res.json(response.data);
})

app.listen(3000, () => {
	console.log('we are now listening to port 3000...');
});