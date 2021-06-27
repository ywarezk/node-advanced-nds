
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
app.use(session({
	secret: 'hello'
}))
app.use(cookieParser());


app.get('/', (req, res) => {
	req.session['session-example'] = 'Session is working' 
	res.cookie('jwt', '3452345SADFASDFasdxvzxvc', {httpOnly: true, secure: true});
	res.send('hello world');
});

app.get('/hello', (req, res) => {
	// {connect_sid: 'hello...'}
	// req._headers
	console.log(req.cookies);
	res.send(req.cookies['jwt'] + req.session['session-example']);
})

app.listen(3000, () => {
	console.log('listenning');
})