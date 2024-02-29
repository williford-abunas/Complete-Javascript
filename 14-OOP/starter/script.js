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

//Encapsulation
class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdrawal(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log('Insufficient balance!');
    }
  }

  getAccountInfo() {
    return this;
  }
}

BankAccount.prototype;
const acct1 = new BankAccount(12345, 5000);
const acct2 = new BankAccount(54321, 3000);
console.log(acct1);
console.log(acct1.getAccountInfo());

acct1.deposit(500);
console.log(acct1);
acct2.withdrawal(6000);
console.log(acct2);
//Inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof woof!');
  }
}

class Cat extends Animal {
  meow() {
    console.log('Meow meow!');
  }
}

const myDog = new Dog('Kobe');
console.log(myDog);
myDog.eat();
myDog.bark();

const myCat = new Cat('Joy');
myCat.eat();
myCat.meow();

//Polymorphism
class Human extends Animal {
  eat() {
    return super.eat() + ' ' + 'polymorphed method';
  }
}

const rey = new Human('Rey');
console.log(rey.eat());

//Abstraction
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.make} ${this.model} is starting`;
  }

  stop() {
    return `${this.make} ${this.model} is stopping`;
  }
}

const myCar = new Vehicle('Toyota', 'Camry');
console.log(myCar.start());
console.log(myCar.stop());
