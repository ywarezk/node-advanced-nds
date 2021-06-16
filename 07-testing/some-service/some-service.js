const { log } = require('../log');

function sayHello(msg) {
	
	if (msg === 'error') {
		
		
		// deal with error
		const someError = new Error();
		someError.code = 1040;
		
		log(someError);
		
		throw someError;	
	}
	
	return 'hello world ' + msg;
}

const age = 36;

module.exports = {
	sayHello,
	age
}


//