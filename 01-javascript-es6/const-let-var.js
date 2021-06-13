// function(require, module, exports, __dirname) {
	
// }()

// require('lodash')

var hello = 'world';
var hello1;

let myBoolean = true;
let myBoolean2;

const foo = 'bar';

/**

			scope					number of assignments

var			functional						infinite

let				{}							infinite
	
const			{}							1



 */

function sayHello(){
	var something = 'foo bar';
	
	if (true) {
		var something = 'hello world';		 
	}

	console.log(something);	
}



function sayHello2(){
	
	console.log(foo);
	
	if (true) {
		let something = 'hello world';		 
	}

	console.log(something);	
}
 
 
 const myArray = [1,2,3];
 myArray.push(4);
