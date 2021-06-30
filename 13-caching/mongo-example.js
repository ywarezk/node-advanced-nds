

const { createClient } = require('redis');

const client = createClient();

// redis is a memory database
/**

{
	key: 'string'
}


 */
 
 client.set('users', JSON.stringify([{firstName: 'Yariv'}]), () => {
	 console.log('redis stored the value')
	 
	 client.get('users', (err, users) => {
		console.log(users)
	})
 })
 
 console.time('someQuery')
 // ... query
 console.timeEnd('someQuery')