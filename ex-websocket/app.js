const express = require('express');
const path = require('path');
// const WebSocket = require('ws');
// const pingService = require('./ping.service');




const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
	
	ws.on('message', function incoming(message) {
    	console.log('received: %s', message);
	});
	
	setInterval(() => {
		ws.send('something');		
	}, 1000);
  
});

const app = express();

// /index.html
// app.use('/', express.static(
// 	path.resolve(__dirname, 'public')
// ));

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(3000, () => {
	console.log('we are now listening on 3000...');
});

