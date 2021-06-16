# Testing

## REST

- stateless
- a, b, c, d,
- testabily

## Type of tests

- unit test - mocha
- integration tests - request 
- e2e tests - postman

## Testing Frameworks

- write and run tests

popular ones:

- mocha - minimalistic, browser, node
- jasmin - browser, node
- jest - node

## EX.

- run mocha tests with the ide
- create express server
- get => /api/users
- return a json of the users

```js
res.json([
	{firstName: 'Yariv', lastName: 'Katz'}
])
```

- you need to test the rest api /api/users
- install axios
- in the tests run the express server in the `before`
- in the test in the `after` close the rest server
- write an it test you will send request to /api/users validate the users that are returned.

