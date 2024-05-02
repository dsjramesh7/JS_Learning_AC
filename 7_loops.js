// for loop
for (let i = 1; i <= 5; i++) {
  console.log("number=", i);
}
console.log("the for loop has ended");

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
  console.log("for everyloop how it works=", sum);
}
console.log("sum=", sum);

// while loop
let j = 1;
while (j <= 7) {
  console.log("thala for a reason will end at 7");
  j++;
}

//do while which we use rarely
let c = 1;
do {
  console.log("even the condition is fault it will print one time lol");
} while (c > 10);

//for of [is use to iterate over string and array]
let character = ["sasuke", "itachi", "allmight", "zoro"];
for (let element of character) {
  console.log("individual character is = ", element);
}

//for in [use to iterate over objects]
let bounty = {
  fullName: "kevin Mitnick",
  prize: "1 million",
  alive: false,
};

for (let i in bounty) {
  console.log("key", i, "value", bounty[i]);
}

//practice
// 1. print all even number from 1 to 100
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//guess number game
// let yourNumber = prompt("enter your guessing number:");
// let selectedNumberToGuess = 34
// while (yourNumber != selectedNumberToGuess) {
//   yourNumber = prompt("you entered wrong number guesse again, enter your guessing number:");
// }
// console.log("congralution you guessed it right its", selectedNumberToGuess);
