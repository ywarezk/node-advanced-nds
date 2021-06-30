/**

typescript examples

javascript - Dynamic language + Static tools

 */
 
let message: string = 'hello world'; 

console.log(message);

// message = 10;

const myArray: number[] = [];

myArray.push(10);
// myArray.push('sdfaf');

function sayHello(msg: string, json: {[key: string]: boolean}): number {
	return msg.length;
}

interface Something {
	
}

enum MyColor {
	RED = 0
}

const myObject: {[key: string]: any} = {
	hello: 10,
	foo: 'hello',	
}

