/**

mocha will add global functions when running the test file

 */
 
// const {  describe } = require('mocha'); 

// { age, sayHello}
// const allObject = require('./some-service');
const { sayHello } = require('./some-service');

const { expect } = require('chai');
// {log}
const kibhana = require('../log');
const { spy } = require('sinon');
 
describe('a group of tests', () => {
	
	
	describe('success', () => {
		
		it('testing the sayHello', () => {
			// chai
			const hello = sayHello('yariv katz');
			expect(hello).to.equal('hello world yariv katz1');
			
		})	
		
	});
	
	describe('errors', () => {
		
		beforeEach(() => {
			// load fixture
		})
		
		beforeEach(() => {
			spy(kibhana, 'log');
		})
		
		it.only('check the error', () => {
			try {
				const hello = sayHello('error');	
			} catch(err) {
				expect(err.code).to.equal(1040);
				expect(kibhana.log.calledOnce).to.equal(true);
			}
			
		});
		
		afterEach(() => {
			// delete fixtures
		})
		
	})
	
	
	
	
	// describe('label for describing this group of tests', () => {
		
	// })
	
	// describe('conditions a', () => {
		
	// })
	
})

