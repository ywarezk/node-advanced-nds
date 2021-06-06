

// module.exports = function safePromise(middlewareFunction) {
// 	return async (req, res, next) => {
// 		try {
// 			await middlewareFunction(req, res, next);	
// 		} catch(err) {
// 			next(err);
// 		}
		
// 	}
// }

module.exports = function safePromise() {
	
	return async (req, res, next) => {
		
		next();	
		
		process.once('unhandledRejection', (err) => {
			next(err);
		})
				
	}
}