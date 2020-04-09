// The Problem:
// Write a program that prints the numbers from 1 to 100.
// For multiples of three print “Fizz” instead of the number
// For the multiples of five print “Buzz” instead of the number
// For numbers which are multiples of both three and five print “FizzBuzz”
function fizzBuzz(array) {
    //result/output arr
 let output = [];
    //iterate over the array
    for (let i = 0; i < array.length; i++){
    //if the number in the array is a multiple of 3 
    if (array[i]%3 === 0){
        output.push(array[i])
    }

    }
    //put multiple of 3 into result arr as Fizz
    //if the number in the arr is a multiple of 5
    //put the number in the result arr and Buzz
    //if number in the array is a multiple of both 3 and 5
    //put the number in the result array as FizzBuzz
    //if the number doesnot meet the above conditions
    //put the number in the result array






    //return result/output










//   var resultArr = [];
//   var fizz = fizz;
//   var buzz = buzz;
//   var fizzbuzz = fizzbuzz;

//   for (var i = 1; i <= array.length; i++) {
//     if (array[i] % 3 === 0) {
//       resultArr.push(fizz);

//     } else if (array[i] % 5 === 0) {
//       console.log(buzz);

//     } else if (array[i] % 3 === 0 && array[i] % 5 === 0) {
//       console.log(fizzbuzz);

//     } else {
//       console.log(array[i]);
//     }

//   }
// }

fizzBuzz([33, 15, 3, 50, 21, 4]);
//["Fizz","FizzBuzz","Fizz","Buzz", "Fizz", 4]