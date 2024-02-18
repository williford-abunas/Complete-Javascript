'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'd', 'e'];

//returns a new array
console.log(arr.slice(2));
console.log(arr.slice(1, -2));
//shallow copy
console.log(arr.slice()); //can chain
console.log([...arr]);

//splice changes the original arr
console.log(arr.splice(-1)); //takes/deletes
console.log(arr);
const deleteCount = 2;
console.log(arr.splice(1, deleteCount));

//REVERSE .reverse()
//reverses the original array

//CONCAT joins array
//arr1.concat(arr2)

//JOIN joins elements into  a string with a separator specified

//AT can also be used with strings
const arr3 = [23, 11, 45];
console.log(arr3.at(0));
//getting last element
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));

//forEach loop

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

//continue and break does bot work in forEach
movements.forEach((movement, i, arr) => {
  if (movement > 0) {
    console.log(`Movement ${i}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i}: You withdrew ${Math.abs(movement)}`);
  }
});

//forEach with Maps and Sets
currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

//Set does not have key
const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'USD']);

currenciesUnique.forEach((value, _, map) => {
  console.log(`${value}: ${value}`);
});
