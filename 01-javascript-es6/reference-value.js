/**
 * By reference by value
 * what is passed to the function by reference
 * what is passed to the function by value
 */
 
 function sayHello(msg) {
	 msg = 'foo bar'
	 console.log(msg);
 }
 
 let message = 'hello world'
 sayHello(message);
 
 
 function fooBar(arr) {
	 arr = [];
	//  arr.push('stam value');
	//  for (const item of arr) {
	// 	 console.log(item);
	//  }
 }
 
 let messages = ['hello', 'world', 'foo', 'bar'];
 fooBar(messages)
 console.log(messages);