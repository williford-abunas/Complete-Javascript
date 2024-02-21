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

//findIndex - returns the index
//some and every - looks for condition
//.includes looks for equality
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

//flat and flatMap
const arrEx = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arrEx.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overAll = allMovements.reduce((acc, mov) => acc + mov);
console.log(overAll);

const overAllChain = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, val) => acc + val);
console.log(overAllChain);

//Flatmap - 1 level deep
const overAllChain2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, val) => acc + val);
console.log(overAllChain);

//Sorting arrays
//.sort mutates the original array
const owners = ['Will', 'Andrew', 'Yen'];
console.log(owners.sort());

//sorting numbers, sort is intended for strings (alphabetically)
console.log(movements);
//return < 0, A, B (keep order)
//return > 0, B, A (switch order)

//Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });

movements.sort((a, b) => a - b);
console.log(movements);

//Descending
movements.sort((a, b) => b - a);

console.log(movements);

//Ways of Creating and Filling Arrays
console.log(new Array(1, 2, 3, 4, 5));

//1 argument defines array length
const x = new Array(7);
// console.log(x.fill(1));

//fill(val, start, end)
x.fill(1, 3, 5);

//Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

//use case for converting Array out of node list from queryselectorAll

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value')
  ).map(el => Number(el.textContent.replace('€', '')));

  console.log(movementsUI);
});

//Array Method Practice
//1.
const bankDepositsSum = accounts
  .flatMap(acc => acc.movements)
  .filter(acc => acc > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(bankDepositsSum);
//2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov < 0).length;
// console.log(numDeposits1000);

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);

//3. creating new object w/reduce
const { deposits2, withdrawals2 } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (acc, cur) => {
      acc[cur > 0 ? 'deposits2' : 'withdrawals2'] += cur;
      return acc;
    },
    { deposits2: 0, withdrawals2: 0 }
  );

console.log(deposits2, withdrawals2);

//4. Converting Any String to Title Case
const titleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = [
    'a',
    'an',
    'the',
    'but',
    'or',
    'on',
    'in',
    'with',
    'not',
    'too',
    'is',
  ];

  const titleArg = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleArg);
};

console.log(titleCase('this is a nice title'));
console.log(titleCase('this is a LONG title but not too long'));

//Coding Challenge
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1. add recommendedFood property to dogs object
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);

console.log(dogs);
//2.
// const SarahDogs = dogs.map(dog => dog.owners.includes('Sarah') && dog.weight >= dog.recommendedFood * 0.1 && dog.weight <= dog.recommendedFood * 0.1 ? 'eating okay' : 'not eating okay' );

const checkSarahDog = () => {
  const SarahDogs = dogs.find(dog => dog.owners.includes('Sarah'));

  console.log(
    SarahDogs.curFood > SarahDogs.recommendedFood * 0.9 &&
      SarahDogs.curFood < SarahDogs.recommendedFood * 1.1
      ? 'eating okay'
      : 'not eating okay'
  );
};

checkSarahDog();
//3.

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

//4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

//5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

const checkEatingOk = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

//6.
console.log(dogs.some(checkEatingOk));

//7.
const eatingOkay = dogs.filter(checkEatingOk);

console.log(eatingOkay);

//8.
const sortDogs = dogs.sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(sortDogs);
