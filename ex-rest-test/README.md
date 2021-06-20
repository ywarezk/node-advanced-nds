# Install mongo

https://www.mongodb.com/try/download/community

## windows

- C:\data
- mongod.exe

## mac

```
brew install mongodb
```

## EX.

- install mongo
- install mongo driver

```bash
> npm install mongodb
```

- try to connect to mongo

```js
const {MongoClient} = require('mongodb');
const client = new MongoClient(databaseUrl);
client.connect()
```

- users collection
- posts collection
- one user can have many posts

- create express server
- get => /api/users
- this will return user:

```
{
	firstName: 'yariv',
	lastName: 'katz',
	posts: [
		{date: new Date(), message: 'some message'}
	]
}
```

- write a test for this
 