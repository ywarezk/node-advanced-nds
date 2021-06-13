const express = require('express');
const usersRouter = require('./user/user.routes');

const app = express();

/*

/api/user/login
/api/user/register
/api/user/
/api/user/:id

/api/settings

// database / tables



*/


app.get('/', (req, res, next) => {
	// res.send('hello world...');
	next(new Error())
})

app.use('/api/user', usersRouter)

// app.use('/')

// deal with error
app.use(function(err, req, res, next) {
	
})

// app.use('/admin', anotherApp)

// anotherApp.listen()

app.listen(3000, () => {
	console.log('we are now excepting requests...');
})