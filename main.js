// function counter(){
//     var counter = 0;
//     function IncreaseCounter() {
//     return counter += 1;
//     };
//  return IncreaseCounter;
// }
// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());


// Question 2.

// let count = 0;
// (function () {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();

// Question 3.

// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }

// Question 4.

// var a = 12;
// (function () {
//   alert(a);
// })();

// Question 5.
// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);
//   };
// })();
// x();

// Question 6.
// var globalVar = "xyz";
// (function outerFunc(outerArg) {
//     var outerVar = 'a';
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
//     console.log(
//         "outerArg = " + outerArg + "\n" +
//         "innerArg = " + innerArg + "\n" +
//         "outerVar = " + outerVar + "\n" +
//         "innerVar = " + innerVar + "\n" +
//         "globalVar = " + globalVar);
//     })(456);
// })(123);


// Question 7.
// function counter(){
//   var counter = 0;
//   function IncreaseCounter() {
//   return counter += 1;
//   };
// return IncreaseCounter;
// }
// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

// Question 8.
// function calculateArea(length) {
//   return function getArea(breadth) {
//     return length * breadth;
//   }
// }
// const areaClosure = calculateArea(10);
// const area = areaClosure(5);
// console.log(area); 