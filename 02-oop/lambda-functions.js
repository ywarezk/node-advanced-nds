'use strict'

// module.exports = {}
console.log(this)

function sayHello() {
	// global
	// {}
	console.log(this);
}

// module.exports = {}
console.log(this);
const fooBar = () => {
	console.log(this);
}

// sayHello();
fooBar()
const a = {hello: sayHello, foo: fooBar};
// a.hello();
a.foo();


