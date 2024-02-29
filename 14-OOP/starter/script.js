'use strict';
//constructor - cannot be made by arrow function
class Person {
  constructor(firstName, birthYear) {
    //instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const will = new Person('Will', 1991);
console.log(will);
//1. New {} is created
//2. Function is called, this = {}
//3. {} link to prototype
//4. Function automatically return {}

const bob = new Person('Bob', 1994);
const jill = new Person('Jill', 1980);
console.log(bob, jill);

console.log(will instanceof Person);
//bad practice to include methods inside constructor - result will be multiple copies of fn per instance
