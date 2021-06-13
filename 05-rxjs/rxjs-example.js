// ----o---o---o---o-|-------->

// ----K---K---K---K-|

https://www.youtube.com/watch?v=rLPW1VowY1E&t=3590s

/*

(oldObservable) =>  newObservable

*/


const { Observable } = require('rxjs');
// const {} = require('rxjs/operators')

const intervalObservable = new Observable((observer) => {
	
	setInterval(() => {
		observer.next('hello world');
	}, 1000)
	
});

intervalObservable.subscribe(
	(msg) => {
		console.log(msg);
	}
)