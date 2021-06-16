/**

prototype

 */
 
// myPrototype ----------> Object.prototype
const myPrototype = {
	foo: function() {
		console.log('hello world')
	},
	age: 36
};

// const myPrototype2 = {
// 	foo: function() {
// 		console.log('hello world')
// 	},
// 	age: 36
// };

// a --------> Object.prototype
const a = {hello: 'world', age: 42};

// Object.setPrototypeOf(myPrototype, myPrototype2);
Object.setPrototypeOf(a, myPrototype);
//   __proto__
// a ---------> myPrototype -----> Object.prototype
console.log(a.age);
console.log(a.foo());


