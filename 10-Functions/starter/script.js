'use strict';

// const flight = 'LH234';
// const will = {
//   name: 'Will',
//   passport: 21342423432523,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 21342423432523) {
//     alert('check in');
//   } else {
//     alert('wrong');
//   }
// };

// checkIn(flight, will);
// console.log(flight);
// console.log(will);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
// };

// newPassport(will);
// checkIn(flight, will);

//higer order functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//HIGHER ORDER
const transformer = function (str, fn) {
  console.log(`Transformed: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

//function returning functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

//Arrow Fn
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greetArr('Hey');
greeterHey('Will');
greeterHey('Bob');

greetArr('Hello')('Dan');

//Call and apply methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, passengerName) {
    console.log(
      `${passengerName} booked ${this.airline} flight ${this.iataCode} ${flightNum} `
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      passengerName,
    });
  },
};

lufthansa.book(239, 'John doe');
lufthansa.book(345, 'Jane Smith');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//DOes not work
// book(23, 'KEvin boris')

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings.bookings);
book.call(lufthansa, 456, 'Mary Cooper');
console.log(lufthansa.bookings);

//Apply Method receives array
const flightData = [456, 'George Cooper'];
book.apply(eurowings, flightData);
console.log(eurowings.bookings);

book.call(lufthansa, ...flightData);
console.log(lufthansa.bookings);

//Bind method
//returns a new function along with this keyword reference

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);

bookEW(657, 'Floyd May');
console.log(eurowings.bookings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Boy Cop');
console.log(eurowings.bookings);

//With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial Application

const addTax = function (rate, value) {
  return value + value * rate;
};

// console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(200));

const addTaxRate = function (rate) {
  return function addVATValue(value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(200));

//CODING CHALLENGE #1
const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),

  registerAnswer() {
    const promptArray = [
      poll.question,
      ...poll.options,
      '(Write option number)',
    ];
    let promptText = '';
    let newLine = '\n';

    for (const prompt of promptArray) {
      promptText += prompt + newLine;
    }
    const userInput = Number(prompt(promptText));
    console.log(userInput);
    for (const [index, answer] of this.answers.entries()) {
      if (userInput === index) {
        this.answers[index]++;
        console.log(this.answers);
        return;
      }
    }

    alert(`Please choose a correct number!`);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerAnswer.bind(poll));
