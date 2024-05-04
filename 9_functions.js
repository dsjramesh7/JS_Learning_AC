// function defination/statement
function sum(a, b) {
  // here sum(a,b) are parameter
  console.log(a + b);
}
sum(14, 56); // function invoked/called   // here sum(a,b) are arguements

// arrow function
const divide = (a, b) => console.log(a / b);
divide(9, 3);

// count vowels in a string
const countVowelsInString = (str) => {
  let count = 0;
  for (let character of str) {
    if (
      character === "a" ||
      character === "e" ||
      character === "i" ||
      character === "o" ||
      character === "u"
    ) {
      count++;
    }
  }
  return count;
};
console.log(countVowelsInString("abcd"));
