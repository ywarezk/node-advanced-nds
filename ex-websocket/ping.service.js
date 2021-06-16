

const { EventEmitter } = require('events');
// const WebSocket = require('ws');
const WebSocket = require('ws');

// class PingService extends WebSocket.Server {
// 	constructor(options) {
// 		super(options);
		
		
		
// 		// this.on('open', () => {
// 		// 	console.log('websocket is now open...')
			
// 		// 	setInterval(() => {
// 		// 		this.send('hello world')
// 		// 	}, 1000)
		
// 		// });
		
// 		// this.on('error', (err) => {
// 		// 	console.log(err);
// 		// })
		
// 		this.wss = new WebSocket.Server({ port: 8080 });	
		
		
		
		
// 		this.wss.on('connection', (ws) => {
// 			setInterval(() => {
// 				ws.send('hello world')
// 			}, 1000);
// 		})
// 	}
	
// }

// const pingService = new PingService({ port: 8080 });

// module.exports = pingService;



// EventEmitter
// send('server sending message to client')
// send message every second
// on('message') => client is sending me message

// PingService.prototype -------------> WebSocket.Server ------------> EventEmitter -----------> Object.prototoype
class PingService extends WebSocket.Server {
	constructor(options) {
		super(options);
		
		this.on('connection', () => {
			console.log(this);
		})
	}
}