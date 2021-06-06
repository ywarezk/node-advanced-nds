/**

	async await
	another way to deal with promise

 */
 
const timerPromise = require('./promise-example');

/*
timerPromise
	.then((msg) => {
		
		somePromise1(msg).then((someValue) => {
			
			somePromise2(someValue).then(() => {
				
			})
			
		})
		
	})
	
*/

timerPromise
	.then((msg) => {
		return somePromise1(msg)
	})
	.then((someValue) => {
		
	})
 
/**
 * 
 * @returns Promise<number>
 */
async function myAge() {
	const msg = await timerPromise;
	console.log('hello world');
	const someValue = await somePromise1(msg);
	await somePromise2(someValue);
	
	const [msg, someValue] = await Promise.all([
		timerPromise,
		somePromise1()
	]);
	
	// Promise.race()
	
	return 36;
		
}

myAge().then((thritySix) => {
	
})

