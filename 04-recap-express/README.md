# Going over express basics



## EX.

- take the proxy app
- create in a seperate file the following middleware creator:
- the middleware creator should wrap and async function
- if the function fails -> Promise is rejected, safePromise should call `next(err)`

```js
safePromise(async (req, res, next) => {
	await axios.get('http://nztodo.herokuapp.com/api/tasks1/?format=json');			
})
```