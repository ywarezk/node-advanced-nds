/**
 * 
 desctructuring
 */

const hello = {
	hello: 'world',
	foo: 'bar'
}

// const foo = hello['foo']
// const hello = hello['hello']
const { foo, hello } = hello

const arr = [1,2,3,4]; 

const [first, second, ...rest] = arr;