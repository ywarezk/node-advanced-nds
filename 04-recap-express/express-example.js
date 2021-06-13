const express = require('express');
const { json, static } = require('express');
const { resolve } = require('path');
const axios = require('axios');
const user = require('./user.middleware');

const app = express();


// Req ----o-----o-----o-----o-----o----->

// /public/hello

// express.static( resolve(__dirname, './assets') )
// => function(req, res, next) {}
app.use('/public', express.static( resolve(__dirname, './assets') ));

app.use(user('yariv'));

app.get('/user/:id', async function (req, res, next) {
//   if (req.params.id.indexOf('hello world') === -1) {
// 	  throw new Error();
//   }

	// axios.get('http://nztodo.herokuapp.com/api/tasks1/?format=json').catch(next)
	
	console.log(req.user);

	try {
		await axios.get('http://nztodo.herokuapp.com/api/tasks1/?format=json')		
	} catch(err) {
		const error = new Error('something specific');
		error.code = 1014;
		next(err);
	}
	
	
	
});

app.use(function(err, req, res, next) {
	if (err.code !== 1014) {
		next();
		return;
	}
	console.log('report to kibhana');
	next();	
})

app.use(function(err, req, res, next) {
		
})

app.listen(3000, () => {
	console.log('now listening 3000');
})

// process.on('uncaughtException', (err) => {
	
// });

process.on('uncaughtExceptionMonitor', (err) => {
	
});