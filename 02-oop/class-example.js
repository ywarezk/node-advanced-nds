
// function Person () {}
// Person.prototype = { constructor, birthday}
class Person {
	constructor(name) {
		this.name = name;
		this.age = 36;
	}
	
	birthday() {
		// what is this?
		// this => a
		// this => yariv
		
		// this is different 
		// 1. this instance
		// 2. this === a
		console.log(this);
		this.age++;
	}
	
	birthday2 = () => {
		// this will always be an instance
		this.age++;	
	}
}
										// __proto__
// Student.prototype = {constructor, foo} --------> Person.prototype
class Student extends Person {
	constructor(name, grade) {
		super(name);
		this.grade = grade;
	}
	
	foo() {
		
	}
	
	birthday2 = () => {
		// super.birthday2();
		console.log(this);
		console.log('some additional logic')
	}
}
//      __proto__
// yariv -------> Student.prototype -----> Person.prototype -----> Object.prototoye
const yariv = new Student('Yariv', 60);
// avital -------> Student.prototype -----> Person.prototype -----> Object.prototoye
const avital = new Student('Avital', 100);
avital.birthday2();
avital.birthday2();
avital.birthday2();
avital.birthday2();

// 36
console.log(yariv.age);

yariv.birthday2();
// 37
console.log(yariv.age);

const a = {birthdayRef: yariv.birthday};
console.log(a['birthdayRef'] === yariv.birthday)
a.birthdayRef.call(yariv);
// NaN
console.log(a.age);

// 37
console.log(yariv.age);

// yariv.birthday.bind(yariv)
// yariv.birthday.call(yariv)
// yariv.birthday.apply(yariv)