'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(num1, num2) {
    return `here is your order ${num1} ${num2}`;
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

//OPtional chaining

console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`${open} on ${day}`);
}

// MEthods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exsit');

//arrays
const users = [{ name: 'Will', email: 'hello@will.com' }];
console.log(users[0]?.name ?? 'User array empty');

//LOOPING

//property names
const { openingHours } = restaurant;
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;
console.log(openStr);

for (let i = 0; i < properties.length; i++) {
  const day = properties[i];
  openStr += ` ${day}${i === properties.length - 1 ? '.' : ','} `;
}
console.log(openStr);

//Property values

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

//SETS

const orderSet = new Set(['pasta', 'pizza', 'pizza', 'rissotto', 'pasta']);
console.log(orderSet);

console.log(new Set('williford'));
console.log(new Set('williford').size);

//Set to array
console.log([...orderSet]);

//Set methods
console.log(orderSet.has('pasta'));
console.log(orderSet.add('garlic bread'));
orderSet.clear();
console.log(orderSet);

//MAPS

const rest = new Map();
rest.set('name', 'Popopopoo');
rest.set(1, 'Pilar');
rest.set(2, 'Sapian');
console.log(rest);
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are close');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
rest.get(time > rest.get('open') && time < rest.get('close'));
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();
// console.log(rest);
rest.set([1, 2], 'TEst');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

console.log(rest.get([1, 2]));

const arr = [1, 2];
rest.set(arr, 'test2');

console.log(rest.get(arr));

//MAP

const question = new Map([
  ['question', 'What is best?'],
  [1, 'C'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try Again'],
]);
console.log(question);

//convert object to Map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//iteration
// const answer = Number(prompt('Your answer'));

console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// console.log(question.get(question.get('correct') === answer));

//convert MAp to array
console.log([...question]);

//Coding Challenge 3
