/**
 * V8 has garbage collector
 * reference count
 * Main thread cleans the memory
 */
 
// inifinte stuff we have clean

// -------o-|------------->
setTimeout(() => {
	console.log('hello world');
}, 1000);

// ------o-----o-----o-----o--->
const intervalId = setInterval(() => {
	console.log('hello interval');
}, 1000);

clearInterval(intervalId);