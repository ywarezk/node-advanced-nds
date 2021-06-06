
/**


// req.user = 'yariv'
app.use(user('yariv'))

 */
 
module.exports = function user(name) {
	
	return function(req, res, next) {
		req.user = name;
		next();
	}
	
}