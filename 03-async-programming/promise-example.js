/**


how many marbles callback is called do i have?
can my async code fail?
does my async code close?



 */
 
 
 /**
 
 promise can deal with the following
 
 ------o-|-------------->
 ------X-------------->
 
  */
 
 
 // ---------0--|----->
 // ---------X----->
 
//  setTimeout(() => {
// 	 console.log('hello world');
//  }, 1000)
 
 // pending  ---> Resolved/fulfilled
 // pending ---> rejected
 
 const timerPromise = new Promise( (resolve, reject) => {
	 
	setTimeout(() => {
		resolve('hello world');	 
		// resolve('foo bar');
		// reject(new Error('something happened'))
	}, 1000)
	 
 } )
 
 timerPromise.then(
	(msg) => {
		console.log(msg);	 
	},
	(err) => {
		console.log(err.message);
	}
 )
 
 
 /**
  * @returns Promise
  */
 function doSomethingWithPromise() {
	 return timerPromise.catch((err) => {
		 console.log('hello world');
		 throw new Error('something happened');
	 });
 }
 
 const newPromise = doSomethingWithPromise()
	.catch((err) => {
		// throw new Error('failing promise');
	})
 	// .then(
	// 	 () => {
		 
	//  	},
	// 	(err) => {
			 
	// 	}
	// )
	
	
// newPromise.catch()

module.exports = timerPromise;