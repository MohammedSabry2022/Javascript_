// "use strict";

//*************************** */
// //function decleration
//******************************/ */
// function calcAge(birthYear) {
//   return 2022 - birthYear;
// }

// const returendAge1 = calcAge(1983);
// console.log(returendAge1);

/* *********************/
// //function expression
/********************/
// const age2 = function (birthYear) {
//   return 2022 - birthYear;
// };
// const returendAge2 = age2(1983);
// console.log(returendAge2);

/********************/
// //arrow function one parameter one line

// const age3 = (birthYear) => 2022 - birthYear;
// console.log(age3(1983));

/********************/
// // functions call another functions
/********************/

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePeices = cutFruitPieces(apples);
//   const orangePeices = cutFruitPieces(oranges);
//   const juice = `juice with ${applePeices} peices of apple and ${orangePeices} of orange pieces.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// // default parameters
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = { flightNum, numPassengers, price };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("ABC", 2);
// createBooking("ABC", 3);
// createBooking("ABC", 4);
// console.log(bookings);

// // pass value , pass reference
// const flight = "LH234";
// const jonas = { name: "jonas", passport: 123456789 };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr. " + passenger.name;
//   if (passenger.passport === 123456789) {
//     console.log("Checked In ...");
//   } else {
//     console.log("Wrong Passport !!");
//   }
// };
// console.log(flight);
// console.log(jonas);
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (passenger) {
//   passenger.name = "jonas";
//   passenger.passport = 999999999;
// };

// newPassport(jonas);
// checkIn(flight, jonas);

/********************/
/*Functions accepting callback functions - 
/********************/

// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// /*Higher Order Function*/

// const transform = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed String: ${fn(str)}`);
//   console.log(`Function Name: ${fn.name}`);
// };

// transform("omar mohammed sabry", upperFirstWord);

// transform("omar mohammed sabry", oneWord);

/********************/
/*Functions returning functions
/********************/
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// greeterHey("jonas");
// greeterHey("Omar");

// greet("Hey")("Omar");

/********************/
/*Functions returning functions
/********************/
/* Call Method */
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Omar Mohammed Sabry");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;
book.call(eurowings, 240, "Koky Mohammed Sabry");
console.log(eurowings);

/*Apply method */
const flightData = [583, "nameName"];
book.apply(eurowings, flightData);

/* bind method */
const bookEW = book.bind(eurowings);
bookEW(583, "otherName");

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
};
