const express = require('express');
const { resolve } = require('path');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
// passport
// passport-jwt

const app = express();
app.use(express.json())
app.use(express.urlencoded())
// req.cookies
app.use(cookieParser())

const users = [
	{id: 1, username: 'yariv', password: '12345678', roles: 'admin'},
	{id: 2, username: 'yonathan', password: '12345678', roles: 'user'},
	{id: 3, username: 'omer', password: '12345678', roles: 'anon'}
]

// 1. username/password
app.route('/login')
	.get((req, res) => {
		res.sendFile(resolve(__dirname, 'login.html'))
	})
	// req.body
	.post((req, res, next) => {
		// in real life bcrypt(req.body.password)
		const user = users.find(u => u.username === req.body.username && u.password === req.body.password)
		if (user) {
			const token = jwt.sign({userId: user.id}, 'some secret', {expiresIn: "10h"});
			
			res.cookie('jwt', token, {
				httpOnly: true,
				secure: false,
				sameSite: true
			});
			
			res.send('the token is now stored as a cookie');
			
			// res.send(token);
			// create jwt token for that user
		} else {
			// login failed
			res.status(401).send('login failed');
			// next(new Error('failed to login'))
		}
	});

// authenticate the username and password
// app.post('/login', (req, res) => {
	
// })


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyNDc4Mzc4MSwiZXhwIjoxNjI0ODE5NzgxfQ._qXTpLGc7OMprVmSDFaaX6sQ3F7EEyQ_VtDMNxPq9ea

// authentication
// req.user
app.use('/api', (req, res, next) => {
	// only authorized users can access this
	
	const token = req.cookies['jwt'];
	const payload = jwt.verify(token, 'some secret', (err, payload) => {
		const userId = payload.userId;
		const user = users.find(u => u.id === userId);
		if (user) {
			req.user = user;
			next()
		} else {
			res.status(403).send('not authorized');
		}	
	});
	
})

// authorization
// req.user verify the rol


// middleware factory / creator
function authorization(role) {
	return (req, res, next) => {
		if (req.user.roles === role) {
			next()
		} else {
			res.status(403).send('error authorization')
		}
	}
}

app.use('/api/users', authorization('admin'))

app.get('/api/users', (req, res) => {
	// only authorized users can access this
	res.json(users);	
})

app.listen(3000, () => {
	console.log('listening...');
})