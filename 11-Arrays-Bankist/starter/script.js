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

//Coding Practice Array
const checkDogs = function (dogsJulia, dogsKate) {
  const joinedArray = dogsJulia.slice(1, -2).concat(dogsKate);
  joinedArray.forEach((dog, i) =>
    dog >= 3
      ? console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`)
      : console.log(`Dog number ${i + 1} is still a puppy 🐶`)
  );
  console.log(joinedArray);
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

//map, filter and reduce
//MAP - creates a new array
//Filter - creates new array that passes a condition(true)
//Reduce - reduce all elements into one single value

const eurToUsd = 1.1;

const movementsUSD = account1.movements.map(mov => mov * eurToUsd);

console.log(account1.movements);
console.log(movementsUSD);

const description = account1.movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(description);

//FILTER
const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

//REDUCE
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

//Maximum value
const maxNum = movements.reduce((acc, cur) => {
  if (acc > cur) {
    return acc;
  } else return cur;
}, movements[0]);

console.log(maxNum);

//CODING CHALLENGE 2
// const calcAverageHumanAge = function (ages) {
//   let humanAge;
//   const humanYears = ages.map(age =>
//     age <= 2 ? (humanAge = 2 * age) : (humanAge = 16 + age * 4)
//   );

//   const above18 = humanYears.filter(age => age > 18);
//   console.log(above18);

//   // const averageAdult =
//   //   above18.reduce((acc, cur) => acc + cur, 0) / above18.length;

//   const averageAdult = above18.reduce(
//     (acc, cur, i, arr) => acc + cur / arr.length,
//     0
//   );
//   console.log(averageAdult);
//   return averageAdult;
// };

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age > 18)
//     .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

//   return humanAges;
// };

//ARROW
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age > 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

//CHAINING ARRAY METHODS

const totalDepositInUsd = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, cur) => acc + cur);

console.log(totalDepositInUsd);

//FIND - retrieve one element base on condition
const firstWithdraw = movements.find(mov => mov < 0);
console.log(firstWithdraw);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

const accountJess = function () {
  for (const acc of accounts) {
    if (acc.owner === 'Jessica Davis') {
      return acc;
    }
  }
};
console.log(accountJess());
