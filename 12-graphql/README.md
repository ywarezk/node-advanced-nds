# Graphql

- communication between client and server

Until now we used REST

- Graphql
- REST

there is a way to adapt REST to graphql easier.


in REST

```js
// code that runs on the client - in the browser
fetch('http://localhost:3000/api/user?posts_full=true&settings_full=true')
fetch('http://localhost:3000/api/post')
fetch('http://localhost:3000/api/tag')
```

request -> GET
path -> which resource he want to read from

In Graphql

```js
fetch('http://localhost:3000/graphql', {
	method: 'POST',
	body: {
		// the query is in a special language called Graphql
		query: `
			mutation {
				me(firstName: "Omer") {
					firstName
				}
			}
			query {
				me {
					firstName
					lastName
					posts(date: 12345674, hello: "world") {
						message
						date
						tags {
							title
							color {
								
							}
						}
					}	
				}
			}
		`
	}
})
```

## How graphql wants you to arrange the data

in our database we have 
- a `users` collection
- `posts` collection

```js
// POST
{
	userId: ObjectId('35243245234'),
	message: 'hello',
	date: 1234563564
}
```

one user can have many posts

user

---- post[]



