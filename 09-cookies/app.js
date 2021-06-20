
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());


app.get('/', (req, res) => {
	res.cookie('jwt', '3452345SADFASDFasdxvzxvc', {httpOnly: true, secure: true});
	res.send('hello world');
});

app.get('/hello', (req, res) => {
	res.send(req.cookies['yariv']);
})

app.listen(3000, () => {
	console.log('listenning');
})