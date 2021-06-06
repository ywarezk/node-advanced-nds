/**
 * 
 
 1. deal with the error -> try {} catch() {}
 2. let it bubble out
 3. some hybrid 
 
 */

function doSomethingWithObject(obj) {
	try {
		console.log(obj.hello)	
	} catch(err) {
		// send error to kibhana
		throw err;
	}
	
}

// try {
	doSomethingWithObject(undefined);	
// } catch(err) {
	
// } 
