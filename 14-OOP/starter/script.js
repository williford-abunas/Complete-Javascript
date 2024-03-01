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

//Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
will.calcAge();
bob.calcAge();
jill.calcAge();

console.log(will.__proto__.__proto__);
console.log(will.__proto__ === Person.prototype);

Person.prototype.species = 'Homo Sapiens';
console.log(will.species, jill.species);

console.log(will.hasOwnProperty('firstName'));
console.log(will.hasOwnProperty('species'));

console.dir(Person.prototype.constructor);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

const arr = [3, 6, 6, 7, 7, 8, 8, 9];

console.log(arr.unique());

//coding challenge
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = parseInt(speed);
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} braking at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const Jeep = new Car('jeep', 120);
console.log(Jeep.speedUS);
console.log(Jeep);
Jeep.speedUS = 50;
console.log(Jeep.speed);

const Toyota = new Car('toyota', '90');
Toyota.accelerate();
Toyota.brake();
Toyota.brake();
Toyota.accelerate();

//Getters and Setters - use case for validation, e.g. check if expected value is inputted
const account = {
  owner: 'will',
  movements: [200, 300, 400, 500],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 900;
console.log(account.movements);

class PersonCl {
  constructor(fullName, age) {
    (this.fullName = fullName), (this.age = age);
  }

  calcYear = function () {
    return 2037 - this.age;
  };
  //setting property that already exist
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  //Static
  static hey = function () {
    return 'Hey There!';
  };
}

const dan = new PersonCl('Dan Dan', 1980);
console.log(dan.fullName);
console.log(dan.calcYear());

//Static Methods
Array.from(document.querySelectorAll('h1'));
console.log(PersonCl.hey());

//Object.create - manually setting prototype of Objects
const PersonProto = {
  calcYear() {
    return 2037 - this.age;
  },

  init(firstName, birthYear) {
    (this.firstName = firstName), (this.birthYear = birthYear);
  },
};

const boy = Object.create(PersonProto);
boy.nameboy = 'Boy';
boy.age = 1990;
console.log(boy);
console.log(boy.calcYear());
console.log(boy.__proto__ === PersonProto);

const loki = Object.create(PersonProto);
loki.init('Loki', 1979);
console.log(loki);
/////////////////////---one code camp
//Encapsulation
// class BankAccount {
//   constructor(accountNumber, balance) {
//     this.accountNumber = accountNumber;
//     this.balance = balance;
//   }

//   deposit(amount) {
//     this.balance += amount;
//   }

//   withdrawal(amount) {
//     if (this.balance >= amount) {
//       this.balance -= amount;
//     } else {
//       console.log('Insufficient balance!');
//     }
//   }

//   getAccountInfo() {
//     return this;
//   }
// }

// BankAccount.prototype;
// const acct1 = new BankAccount(12345, 5000);
// const acct2 = new BankAccount(54321, 3000);
// console.log(acct1);
// console.log(acct1.getAccountInfo());

// acct1.deposit(500);
// console.log(acct1);
// acct2.withdrawal(6000);
// console.log(acct2);
// //Inheritance
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   eat() {
//     console.log(`${this.name} is eating`);
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log('Woof woof!');
//   }
// }

// class Cat extends Animal {
//   meow() {
//     console.log('Meow meow!');
//   }
// }

// const myDog = new Dog('Kobe');
// console.log(myDog);
// myDog.eat();
// myDog.bark();

// const myCat = new Cat('Joy');
// myCat.eat();
// myCat.meow();

// //Polymorphism
// class Human extends Animal {
//   eat() {
//     return super.eat() + ' ' + 'polymorphed method';
//   }
// }

// const rey = new Human('Rey');
// console.log(rey.eat());

// //Abstraction
// class Vehicle {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   start() {
//     return `${this.make} ${this.model} is starting`;
//   }

//   stop() {
//     return `${this.make} ${this.model} is stopping`;
//   }
// }

// const myCar = new Vehicle('Toyota', 'Camry');
// console.log(myCar.start());
// console.log(myCar.stop());
