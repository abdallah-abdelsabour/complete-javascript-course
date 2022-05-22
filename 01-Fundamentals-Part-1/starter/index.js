// // let vs const

// // let can be changed during exuection

// let fName = "abdalllah";

// let lName = "Abdelsabour";

// let fullName = fName + lName;
// console.log(fullName);

// comperson operators

// let a = 1;
// let b = 2;

// console.log(a > b);

// _____________________ operater precedence -________________________

// mdn article about operators precedence

// __________________________  Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Your tasks:

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK 😀

//  ________________ template literals

// regular string

// const name =
//   "abdallah Abdelsabor Mohamed Elsaed  and i am " + 24 + "years old ";

// console.log(name);

//  template literal

// let newName = `i am abdallah

// and i am ${2022 - 1997} years old `;

// console.log(newName);

// Coding Challenge #2

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

//////////////////////////////////

//  to the challenge 2
// Mark's BMI is higher than John's!
// John's BMI is higher than Mark's

// if (BMIMark > BMIMark) console.log(` Mark's BMI is higher than John's!`);

// if (BMIJohn > BMIMark) console.log(`John's BMI is higher than Mark's`);

//    faluthy and trully values

// faulthy =>> 0 "" null NaN undefined

// trully =>>  the rest

// let s = "1";
// console.log(typeof s);

// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(""));

//  equal operators

// strict operator ===

// console.log(1 != "1");

// const test = false || (true && true);

// console.log(test);

// switch statement

// const lname = "g";

// switch (lname) {
//   case "abdallah":
//     console.log("hello Abdallah ");
//     break;
//   case "ahmed":
//     console.log("hello ahmed");
//     break;
//   default:
//     console.log("hello stringer ");
// }

//   conditional operator

// let age = 22;

// let drink = age >= 18 ? "wine " : "water";

// console.log(drink);

// //  in trmplate literal

// console.log(`
// so you can drink ${age >= 18 ? "wine" : "water"}
// `);

// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”

let value = 100;

const tip = value >= 50 && value <= 300 ? 15 / 100 : 20 / 100;

console.log(
  `the bill is ${value} and the tip was ${tip * value} and the total value ${
    tip * value + value
  }`
);
