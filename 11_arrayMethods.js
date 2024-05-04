// map method
// creates a new array by performing some action
let num = [1, 2, 3, 4, 5];
let newArrayMultpliedByTwo = num.map((ele) => {
  return ele * ele;
});
console.log(newArrayMultpliedByTwo);

//filter method
let filterArray = num.filter((ele) => {
  return ele % 2 === 0;
});
console.log(filterArray);

//reduce method
let sum = num.reduce((prev, curr) => {
  return prev + curr;
});
console.log(sum);
