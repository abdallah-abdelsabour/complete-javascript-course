"use strict";

// x = 100;
// console.log(x);

// functions

// const f = function printName(theName) {
//   // console.log(theName);
//   return theName;
// };

// // console.log(f("dc"));

// let d = f(44444);

// console.log(d);

// functions declarations vs functions expressions

// hi("Ammar");

// function hi(theName) {
//   console.log(`hello ${theName}`);

//   return theName;
// }

// console.log(hi("sdc"));

// hi("abdooooo");

// const hi = function (theName) {
//   console.log(theName);
// };

// arrow functions

// const age = (birthday) => 2022 - birthday;

// console.log(age(1997));

// const retirement = (birthDay) => {
//   let age = 2022 - birthDay;
//   let remaintoretiremet = 60 - age;
//   return remaintoretiremet;
// };

// console.log(retirement(1997));

// const hello = (theName, counrty) => `hello ${theName} from ${counrty}`;

// console.log(hello("abdo", "egypts"));

// calling function inside function

// const age = (birthday) => 2022 - birthday;

// const retirement = (birthDay) => {
//   const lAge = age(1990);
//   let remaintoretiremet = 60 - lAge;

//   return remaintoretiremet > 0 ? remaintoretiremet : -1;
// };

// console.log(retirement(1997));

// calcAverage = (a, b, c) => a + b + c / 3;

// checkWinner = (avgDolhins,avgKola) =>{

//   if(avgDolhins > avgKola *2 ){

//     console.log(`dolhins win ${}`)
//   }
// }

// array

// const ar = new Array(10, 20, 30, 40, 50);

// console.log(ar[5]);

// const names = ["abdallah", "ahmed", "khaled", "esmail", "mohamed"];

// console.log(names.indexOf("ahmed"));
// console.log(names);

// challenge  2

// const bills = [125, 555, 44];

// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, total);

//_______________objects'

// console.log(student.friends.length);

// let friendsNumber = student["friends.length"];
// console.log(friendsNumber);
// let bestFriend = student["friends[0]"];

// console.log(
//   `${student.Fname} have ${student.friends.length} and his best friend is called ${student.friends[0]}`
// );
// const student = {
//   Fname: "Abdaalh",
//   Lname: "Abdelsabour ",
//   birthDay: 1997 - 1,
//   hasDriverLicence: function (hello) {
//     return hello;
//   },

//   job: "devolper",
//   friends: ["ahmed", "mohmed", "Adel"],

//   calcAge: function () {
//     this.age = 2022 - this.birthDay;
//   },
// };

// console.log(student.calcAge());
// console.log(student.age);

// chakkenge 4

// mass / height ** 2

const bmiCalc = function (height, mass) {
  return mass / height ** 2;
};

const Jone = {
  fName: "jhone",
  Lname: "smith",
  Height: 1.95,
  mass: 92,

  bmi: bmiCalc(this.height, this.mass),
};

const mark = {
  fName: "mark",
  Lname: "miller",
  Height: 1.96,
  mass: 78,
  calcBmi: function () {
    this.bmi = this.mass / this.Height ** 2;
  },
};
mark.calcBmi();
console.log(mark.bmi);

// Jone.calcBmi();
console.log(Jone.bmi(...));
