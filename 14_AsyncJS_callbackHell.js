// console.log("one");
// console.log("two");

// // function hello() {
// //   console.log("whatup strawhat");
// // }
// // setTimeout(hello, 5000);

// // we can also code like this too
// setTimeout(() => {
//   console.log("bakayaro");
// }, 7000);

// console.log("three");
// console.log("four");







// //callback function
// function sum(a, b) {
//   console.log(a + b);
// }

// function cal(a, b, sumCallbackFunction) {
//   sumCallbackFunction(a, b);
// }
// cal(12, 34, sum);







function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("get data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 3000);
}

//this is call back hell
getData(1, () => {
  getData(5, () => {
    getData(7);
  });
});
