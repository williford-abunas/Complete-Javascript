'use strict';

const flight = 'LH234';
const will = {
  name: 'Will',
  passport: 21342423432523,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 21342423432523) {
    alert('check in');
  } else {
    alert('wrong');
  }
};

checkIn(flight, will);
console.log(flight);
console.log(will);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(will);
checkIn(flight, will);
