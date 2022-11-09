"use strict";
//example 3

//example 2

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 77;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();
console.dir(f);
h();
f();
console.dir(f);
// example 1
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers `);
  };
};

const booker = secureBooking();
console.log(booker);
booker();
booker();
booker();
console.dir(booker);
