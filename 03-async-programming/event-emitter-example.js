/**

---o---o---o---o---------->

 */
 
const { EventEmitter } = require('events');


// process extends Eventemitter
class MyIntervalEvents extends EventEmitter {
	constructor() {
		super();
		
		setInterval(() => {
			this.emit('some-event', 'hello world');
		}, 1000)	
	}
}

const myInterval = new MyIntervalEvents();

myInterval.on('some-event', function(msg) {
	console.log(msg);
});

process.on()

