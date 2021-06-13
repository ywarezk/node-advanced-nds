const { Router } = require('express');

const userRouter = Router();

userRouter.get('/', (req, res, next) => {
	res.json([
		{firstName: 'yariv', lastName: 'katz'},
		{firstName: 'yariv', lastName: 'katz'},
		{firstName: 'yariv', lastName: 'katz'}
	])
});

module.exports = userRouter;