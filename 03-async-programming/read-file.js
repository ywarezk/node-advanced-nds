
const { readFile } = require('fs');

// error-first-callback
// 

// try {
// 	readFile('./README.md', (err, fileContent) => {
// 		if (err) {
// 			console.log(err.message);
// 			throw err;
// 		} else {
// 			console.log(fileContent.toString())
// 		}
// 	})	
// } catch(err) {
	
// }

function readReadmeFile(cb) {
	readFile('./README.md', (err, fileContent) => {
		if (err) {
			console.log(err.message);
			cb(err)
		} else {
			console.log(fileContent.toString());
			cb(null, fileContent)
		}
	})	
}