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
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
// 1. Create an array 'events' of the different game events that happened (no duplicates)
let eventsArray = [];
for (const [minutes, events] of gameEvents) {
  eventsArray.push(events);
}
const eventsSet = new Set(eventsArray);
const events = [...eventsSet];
console.log(events);

//solution

const eventsSolution = [...new Set(gameEvents.values())];
console.log(eventsSolution);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

//solution
const timeEvents = [...gameEvents.keys()].pop();
console.log(timeEvents);
console.log(
  `An event happened, on average, every ${timeEvents / gameEvents.size} minutes`
);
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

for (const [minutes, events] of gameEvents) {
  const half = minutes <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${minutes}: ${events}`);
}

//WORKING with STRINGS
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(airline.length);
console.log('Btt4'.length);

console.log(airline.indexOf('P'));
console.log(airline.lastIndexOf('P'));
console.log(airline.indexOf('Air'));

console.log(airline.slice(4));
console.log(airline.slice(8));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('Middle');
  else console.log('Lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('12A');
checkMiddleSeat('13E');

//CAPITALIZATION
const passenger = 'wIlLiFord';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing email
const email = 'hello@will.io';
const login = ' Hello@Will.iO \n';

const loginLower = login.toLowerCase().trim();
console.log(loginLower === email);

//REPLACING

const pricePH = '233, 97P';
const priceUS = pricePH.replace('P', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

//BOOLEANS - includes, startswith, endswith
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A3'));
console.log(plane2.startsWith('B32'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('correct');
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('not allowed');
  } else {
    console.log('Welcome');
  }
};

checkBaggage('gun');
checkBaggage('laptop');
checkBaggage('knife');

//split & join
console.log('a+very+nice+string'.split('+'));
console.log('Williford Abunas'.split(' '));
const [firstName, lastName] = 'Williford Abunas'.split(' ');
console.log(firstName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const nameArr = name.split(' ');
  const upperArray = [];
  for (const n of nameArr) {
    upperArray.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(upperArray.join(' '));
};

const capitalizeName2 = function (name) {
  const nameArr = name.split(' ');
  const upperArr = [];
  for (const n of nameArr) {
    upperArr.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(upperArr.join(' '));
};
const passengerNew = 'jessica ann smith davis';
capitalizeName(passengerNew);

//padding a string
const message = 'Go to gate 23!';
console.log(message.padStart(25, '-').padEnd(30, '+'));

const maskCard = function (number) {
  const stringNum = String(number);
  const last = stringNum.slice(-4);
  return last.padStart(stringNum.length, '*');
};

console.log(maskCard(55426462636346));
console.log(maskCard('3543536356346768688'));

//repeat
const message2 = 'Bad Weather... All departures delayed...';
console.log(message2.repeat(3));

const planesInLine = function (n) {
  console.log(`there are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(5);

//Coding Challenge 4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const textArea = document.querySelector('textarea');

const button = document.querySelector('body button');

button.addEventListener('click', function () {
  const value = textArea.value;
  const split = value.split('\n');
  // console.log(split);

  let check = '';
  for (let i = 0; i < split.length; i++) {
    check += '✅';
    const split2 = split[i].trim().toLowerCase().split('_');
    const split3 = split2[1].charAt(0).toUpperCase().concat(split2[1].slice(1));

    const finalSplit = split2[0].concat(split3);

    console.log(finalSplit.padEnd(20, ' ') + check);
  }
});

//string exercise

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.replaceAll('_', ' ')} from ${from
    .slice(0, 3)
    .toUpperCase()} to ${to.slice(0, 3).toUpperCase()} (${time.replace(
    ':',
    'h'
  )})`;

  const warning = `${output.includes('Delayed') ? '🔴' : ''}${output}`;

  console.log(warning.padStart(45));
}
