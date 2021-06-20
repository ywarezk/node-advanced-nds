

const app = require('./app');
const main = require('./db');

main();

app.listen(3000, () => {
	console.log('now listening')
})