// arrays is a collection of an items
let rollNOS = [23, 56, 78, 43, 69, 12];
console.log(rollNOS);
console.log(rollNOS.length);
console.log(typeof rollNOS);
console.log(rollNOS[4]);

rollNOS[0] = 99;
console.log(rollNOS);

//looping array
// for loop
for (let i = 0; i < rollNOS.length; i++) {
  console.log(rollNOS[i]);
}

for (let element of rollNOS) {
  console.log(element);
}

// average of student marks
let studMarks = [97, 45, 67, 97, 88, 56];
let sum = 0;
for (let mark of studMarks) {
  sum = sum + mark;
}
let averageMarks = sum / studMarks.length;
console.log(averageMarks);

//offer applying of 10% on an items
let itemsPrice = [56, 399, 345, 675, 444];
console.log(itemsPrice);
for (let i = 0; i < itemsPrice.length; i++) {
  let offer = itemsPrice[i] / 10;
  let Actualoffer = Math.floor(offer);
  itemsPrice[i] -= Actualoffer;
}
console.log(itemsPrice);

let foodItems = ["poha", "chaiBiscuit", "rice", "masladosa"];
let numbers = [1, 23, 4];
console.log(foodItems); // before
foodItems.push("Pizza", "Burger");
console.log(foodItems); // after pushed at last index on original array itself
foodItems.pop();
console.log(foodItems); // popped last item on original array itself
let joinedArray = foodItems.concat(numbers);
console.log(joinedArray);
joinedArray.unshift(34); // to add element at first index in original array
console.log(joinedArray);
joinedArray.shift();
console.log(joinedArray); // to delete element at first index in original array
console.log(joinedArray.slice(2, 5)); // doesnot change on original array okay
console.log(joinedArray);
console.log(joinedArray.splice(0,1,"lasjdflsjafjslad"));
console.log(joinedArray); 
