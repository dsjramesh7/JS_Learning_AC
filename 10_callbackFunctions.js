//A callback is a function passed as an argument to another function.
let skill = ["dance", "cook", "write", "read"];

skill.forEach((eachElement, index, skill) => {
  console.log(
    `Element at ${index} in uppercase ${eachElement.toUpperCase()} from array of skill ${skill}`,
    skill
  );
});

// High Order Function
//In JavaScript, a higher-order function is a function that can accept other functions as arguments, return functions, or both. They enable abstraction, composition, and the creation of more flexible and reusable code.

let num = [1, 2, 3, 4, 5];
num.forEach((element) => {
  console.log(Math.pow(element, 2));
});
